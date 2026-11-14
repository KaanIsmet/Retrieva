from pathlib import Path

import ollama
from pypdf import PdfReader
from sqlalchemy import delete, select, func
from sqlalchemy.orm import Session


from models.document_chunk import DocumentChunk
from models.stored_file import StoredFile

LLM_MODEL = "llama3.2"            # ollama pull llama3.2
EMBED_MODEL = "nomic-embed-text"  # ollama pull nomic-embed-text
CHUNK_SIZE, OVERLAP, TOP_K = 800, 150, 4
UPLOAD_DIR = Path("uploads")

SYSTEM_PROMPT = (
    "Answer the question using ONLY the context below. "
    "If the context does not contain the answer, say "
    "\"I don't know based on the provided documents.\"\n\nContext:\n{context}"
)


def load_text(path: str) -> str:
    if path.lower().endswith(".pdf"):
        return "\n".join(page.extract_text() or "" for page in PdfReader(path).pages)
    return Path(path).read_text(errors="ignore")


def chunk(text: str, size: int = CHUNK_SIZE, overlap: int = OVERLAP) -> list[str]:
    chunks, start = [], 0
    while start < len(text):
        chunks.append(text[start : start + size].strip())
        start += size - overlap
    return [c for c in chunks if c]


def embed(texts: list[str]) -> list[list[float]]:
    return ollama.embed(model=EMBED_MODEL, input=texts).embeddings


def index_files(db: Session, paths: list[str] | None) -> str:
    if not paths:
        return "No files selected."

    total = 0
    indexed_files = 0
    try:
        for path in paths:
            identifier = Path(path).name
            file_record = db.scalar(
                select(StoredFile).where(StoredFile.stored_name == identifier)
            )
            if file_record is None and identifier.isdecimal():
                file_record = db.get(StoredFile, int(identifier))
            if file_record is None:
                continue

            file_path = UPLOAD_DIR / file_record.stored_name
            if not file_path.is_file():
                raise FileNotFoundError(f"Stored file is missing: {file_record.stored_name}")

            chunks = chunk(load_text(str(file_path)))
            db.execute(
                delete(DocumentChunk).where(
                    DocumentChunk.stored_file_id == file_record.id
                )
            )
            for start in range(0, len(chunks), 32):
                batch = chunks[start : start + 32]
                embeddings = embed(batch)
                db.add_all(
                    DocumentChunk(
                        stored_file_id=file_record.id,
                        chunk_index=start + offset,
                        content=content,
                        embedding=embedding,
                    )
                    for offset, (content, embedding) in enumerate(zip(batch, embeddings))
                )
            total += len(chunks)
            indexed_files += 1

        db.commit()
    except Exception:
        db.rollback()
        raise

    return f"Indexed {total} chunks from {indexed_files} file(s)."


def retrieve(db: Session, question: str, k: int = TOP_K) -> list[DocumentChunk]:

    query_embedding = embed([question])[0]

    statement = (
        select(DocumentChunk)
        .order_by(DocumentChunk.embedding.cosine_distance(query_embedding))
        .limit(k)
    )

    return list(db.scalars(statement))

def answer(db: Session, message: str, history: list):
    count = db.scalars(select(func.count()).select_from(DocumentChunk))

    if count == 0:
        yield "Upload and index some documents first"
        return
    
    hits = retrieve(message)

    context = "\n\n---\n\n".join(doc for doc, _ in hits)
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT.format(context=context)},
        {"role": "user", "content": message},
    ]

    text = ""

    for part in ollama.chat(model=LLM_MODEL, messages=messages ,stream=True):
        text += part["message"]["content"]
        yield text
    
    sources = "\n".join(
        f"- **{m['source']}** (chunk {m['chunk']}): {d[:120].replace(chr(10), ' ')}..."
        for d, m in hits
    )
    yield f"{text}\n\n---\n**Sources**\n{sources}"

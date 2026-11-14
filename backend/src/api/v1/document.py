
from services.document_processing import index_files, answer as generate_answer

from sqlalchemy import select
from database import get_db
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile, status
from models.stored_file import StoredFile
from sqlalchemy.orm import Session


from schemas.document import ChatRequest, DocumentCreate, DocumentRead
from services.save_document import delete_saved_file, save_document
document_router = APIRouter(prefix="/document", tags=["document"])

@document_router.get("/", response_model=list[DocumentRead], status_code=status.HTTP_200_OK)
def get_documents(db: Session = Depends(get_db)) -> list[DocumentRead]:
    documents = list(db.scalars(select(StoredFile).order_by(StoredFile.id)).all())
    if documents is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Unable to find documents within database"
        )
    
    if len(documents) == 0:
        return {"message": "list of documents is empty"}
    
    return documents

@document_router.post("/", response_model=DocumentRead, status_code=status.HTTP_201_CREATED)
def post_document(
    file: UploadFile = File(...),
    title: str | None = Form(None),
    description: str | None = Form(None),
    db: Session = Depends(get_db),
) -> DocumentRead:

    document = DocumentCreate(file=file, title=title, description=description)
    record = save_document(
        document.file,
        document.title,
        document.description,
        db,
    )

    try:
        db.commit()
    except Exception:
        db.rollback()
        delete_saved_file(record.stored_name)
        raise

    db.refresh(record)
    return DocumentRead.model_validate(record)

@document_router.post("/{document_id}/process", status_code=status.HTTP_200_OK)
def process_document(document_id: int, db: Session = Depends(get_db)):
    print("processing document...")

    # Look up the StoredFIle; return 404 if missing.
    # Call index_files(db, [str(document_id)])
    # Return the indexing result.

    file = db.get(StoredFile, document_id)

    if file is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Unable to process file; file not found"
        )
    
    res = index_files(db, [str(file.id)])
    
    print("document has been processed.")
    return res


@document_router.post("/chat", status_code=status.HTTP_200_OK)
def chat_model(request: ChatRequest, db: Session = Depends(get_db)):
    
    parts = list(generate_answer(db, request.message, history=[]))
    return {"answer": parts[-1] if parts else ""}
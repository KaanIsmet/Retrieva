# Retrieva

Full-stack RAG (Retrieval-Augmented Generation) application — upload documents, ask questions about them, get answers grounded in and cited from the source material.

This repo contains a FastAPI + Gradio implementation combining:

- JWT-based auth with cookie session handling
- PDF/DOCX text extraction via `unstructured` / `pypdf`
- Vector search with pgvector (Postgres)
- LLM-generated answers with source-chunk citations
- Streaming responses over the chat interface

## Disclaimer

This is a portfolio project — it's functional but not production-hardened. Some notes before you dive in:

- No test suite yet
- Error handling is minimal in a few places



## Pipeline

**Ingestion:** Upload → extract text (`unstructured`/`pypdf`) → chunk → embed (`text-embedding-3-small`) → store in pgvector

**Query:** Question → embed → similarity search (top-k chunks) → prompt LLM with retrieved context → stream answer + cited sources

## Tech Stack

- **Backend:** Python 3.12, FastAPI, Pydantic, SQLAlchemy
- **Database:** PostgreSQL + pgvector
- **AI:** OpenAI API (embeddings + chat)
- **Frontend:** Gradio
- **Document parsing:** `unstructured` / `pypdf`]
- **Host Platforms:** Hugging Face Spaces

## Roadmap

- [ ] Multi-turn conversation memory
- [ ] Hybrid search (keyword + semantic)
- [ ] Additional file type support (Markdown, HTML)
- [ ] Role-based document access

## Demo

[Live demo link] · [Video walkthrough]

## License

MIT
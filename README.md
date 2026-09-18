# Retrieva

Full-stack RAG (Retrieval-Augmented Generation) application — upload documents, ask questions about them, get answers grounded in and cited from the source material.

This repo contains a Spring Boot + React implementation combining:

- JWT-based auth with cookie session handling
- PDF/DOCX text extraction via Apache Tika
- Vector search with pgvector (Postgres)
- LLM-generated answers with source-chunk citations
- Streaming responses over the chat interface

## Disclaimer

This is a portfolio project — it's functional but not production-hardened. Some notes before you dive in:

- No test suite yet
- Error handling is minimal in a few places
- You'll need your own OpenAI API key
- Local Postgres needs the `pgvector` extension enabled manually

If you're looking for a polished, production-ready RAG service, this isn't it. But if you want to see a working full-stack RAG pipeline end to end — auth, ingestion, retrieval, generation — check it out.

## Quick Start

Clone and set up the backend:

```bash
git clone https://github.com/<your-username>/groundwork.git
cd groundwork/backend
cp .env.example .env
# add your DB credentials and OPENAI_API_KEY to .env

./mvnw spring-boot:run
```

Set up the frontend:

```bash
cd ../frontend
npm install
npm run dev
```

Enable pgvector on your local Postgres instance:

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

## Usage

1. Register/log in through the frontend (or `POST /api/v1/users` and `/api/v1/login` directly).
2. Upload a PDF via the document upload screen.
3. Once processed, ask a question in the chat panel — the answer streams in with citations to the source chunks it was grounded in.

### API Endpoints

| Method | Endpoint             | Description                          |
|--------|------------------------|---------------------------------------|
| POST   | `/api/v1/users`        | Register a new user                   |
| POST   | `/api/v1/login`        | Authenticate, receive a JWT cookie    |
| POST   | `/api/v1/documents`    | Upload a document for ingestion       |
| GET    | `/api/v1/documents`    | List uploaded documents               |
| POST   | `/api/v1/query`        | Ask a question, get an answer + sources |

## Pipeline

**Ingestion:** Upload → extract text (Tika) → chunk → embed (`text-embedding-3-small`) → store in pgvector

**Query:** Question → embed → similarity search (top-k chunks) → prompt LLM with retrieved context → stream answer + cited sources

## Tech Stack

- **Backend:** Java 21, Spring Boot, Spring Security, Spring Data JPA
- **Database:** PostgreSQL + pgvector
- **AI:** OpenAI API (embeddings + chat)
- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Document parsing:** Apache Tika

## Roadmap

- [ ] Multi-turn conversation memory
- [ ] Hybrid search (keyword + semantic)
- [ ] Additional file type support (Markdown, HTML)
- [ ] Role-based document access

## Demo

[Live demo link] · [Video walkthrough]

## License

MIT

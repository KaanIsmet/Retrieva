# Retrieva

A full-stack Retrieval-Augmented Generation (RAG) application that lets users upload documents and ask questions about them, with answers grounded in and cited from the source material.

> Built as a portfolio project to demonstrate practical AI application engineering — document ingestion, vector search, LLM orchestration, and a production-style full-stack architecture.

## Features

- 🔐 **JWT-based authentication** — secure login/register with cookie-based session handling
- 📄 **Document upload & processing** — PDF/DOCX text extraction and chunking
- 🔍 **Semantic search** — embeddings stored and queried via pgvector
- 💬 **Conversational Q&A** — ask natural-language questions about uploaded documents
- 📌 **Source citations** — every answer links back to the exact document chunks it was grounded in
- ⚡ **Streaming responses** — token-by-token answer generation for a responsive feel

## Tech Stack

### Backend
- **Java 21 / Spring Boot** — REST API, application logic
- **Spring Security** — JWT authentication
- **PostgreSQL + pgvector** — relational data storage and vector similarity search in one database
- **Apache Tika** — document text extraction (PDF, DOCX, etc.)
- **OpenAI API** — embeddings (`text-embedding-3-small`) and chat completion (`gpt-4o-mini`)

### Frontend
- **React + TypeScript** (Vite)
- **Tailwind CSS**

### Infrastructure
- Backend hosted on [Railway / Render / Fly.io]
- Frontend hosted on [Vercel / Netlify]

## Architecture

```
┌─────────────┐      ┌──────────────────┐      ┌─────────────────┐
│   React UI  │─────▶│  Spring Boot API │─────▶│  PostgreSQL +    │
│             │◀─────│                  │◀─────│  pgvector        │
└─────────────┘      └──────────────────┘      └─────────────────┘
                              │
                              ▼
                      ┌──────────────┐
                      │  OpenAI API  │
                      │ (embed + LLM)│
                      └──────────────┘
```

**Ingestion flow:** Upload → Extract text (Tika) → Chunk → Embed → Store in pgvector

**Query flow:** Question → Embed → Similarity search (top-k chunks) → Prompt LLM with context → Stream answer + cited sources

## Getting Started

### Prerequisites
- Java 21+
- Node.js 18+
- PostgreSQL 15+ with the `pgvector` extension enabled
- An OpenAI API key

### Backend Setup

```bash
cd backend
cp .env.example .env
# Add your DB credentials and OPENAI_API_KEY to .env

./mvnw spring-boot:run
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Database Setup

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

Run the included migration scripts (`backend/src/main/resources/db/migration`) to set up the schema.

## API Overview

| Method | Endpoint                  | Description                          |
|--------|----------------------------|---------------------------------------|
| POST   | `/api/v1/users`            | Register a new user                   |
| POST   | `/api/v1/login`             | Authenticate and receive a JWT cookie |
| POST   | `/api/v1/documents`         | Upload a document for ingestion       |
| GET    | `/api/v1/documents`         | List uploaded documents               |
| POST   | `/api/v1/query`             | Ask a question, get an answer + sources |

## Roadmap

- [ ] Multi-turn conversation memory
- [ ] Support for additional file types (Markdown, HTML)
- [ ] Hybrid search (keyword + semantic)
- [ ] Usage/cost tracking dashboard
- [ ] Role-based access (shared vs. private document collections)

## Demo

[Live demo link] · [Video walkthrough]

## License

MIT

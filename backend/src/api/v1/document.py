from fastapi import APIRouter
from schemas.document import DocumentCreate, DocumentResponse, DocumentUpdate

document_router = APIRouter(prefix="/document", tags=["document"])

@document_router.get("/")
def get_documents():
    return {"data": "list of documents"}

@document_router.post("/")
def post_document(document: DocumentCreate):
    print(document)
    return {"document": "document successfully posted"}
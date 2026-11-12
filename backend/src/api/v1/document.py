from fastapi import APIRouter, File, Form, HTTPException, UploadFile, status

from schemas.document import DocumentCreate, DocumentRead

document_router = APIRouter(prefix="/document", tags=["document"])

@document_router.get("/")
def get_documents():
    return {"data": "list of documents"}

@document_router.post("/", response_model=DocumentRead, status_code=status.HTTP_201_CREATED)
async def post_document(
    file: UploadFile = File(...),
    title: str | None = Form(None),
    description: str | None = Form(None),
) -> DocumentRead:

    document = DocumentCreate(
        file=file,
        title=title,
        description=description)
    
    if document is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Unable to process document sent"
        )
    return DocumentRead(filename=document.file.filename or "uploaded-file", title=document.title)

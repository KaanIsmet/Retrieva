from fastapi import FastAPI
from api.v1.document import document_router

app = FastAPI(
    title="Retreival Augmented Agent",
    description="API for a retreival augmented agent",
    version="0.1.0"
)

app.include_router(document_router)

@app.get("/")
def root():
    return {"message": "application running successfully"}


@app.get("/health")
def health():
    return {"status": "OK"}
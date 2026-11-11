from collections.abc import AsyncIterator
from contextlib import asynccontextmanager

from fastapi import FastAPI
from api.v1.document import document_router
from api.v1.user import user_router
from database import Base, engine


@asynccontextmanager
async def lifespan(_: FastAPI) -> AsyncIterator[None]:
    Base.metadata.create_all(bind=engine)
    yield

app = FastAPI(
    title="Retreival Augmented Agent",
    description="API for a retreival augmented agent",
    version="0.1.0",
    lifespan=lifespan,
)

app.include_router(document_router)
app.include_router(user_router)

@app.get("/")
def root():
    return {"message": "application running successfully"}


@app.get("/health")
def health():
    return {"status": "OK"}
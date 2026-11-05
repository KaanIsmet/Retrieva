from pydantic import BaseModel, ConfigDict
from datetime import datetime


class DocumentCreate(BaseModel):
    filename: str
    title: str | None = None
    description: str | None = None
    status: str = "processing"
    uploaded_at: datetime = None

class DocumentResponse(BaseModel):
    id: int
    filename: str
    title: str | None
    description: str | None
    status: str
    uploaded_at: datetime

    model_config = ConfigDict(from_attributes=True)

class DocumentUpdate(BaseModel):
    title: str | None = None
    description: str | None = None

    model_config = ConfigDict(extra="forbid")
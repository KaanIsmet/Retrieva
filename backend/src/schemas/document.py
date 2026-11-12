from pydantic import BaseModel, ConfigDict
from datetime import datetime
from fastapi import UploadFile


class DocumentCreate(BaseModel):
    file: UploadFile
    title: str | None = None
    description: str | None = None

    model_config = ConfigDict(arbitrary_types_allowed=True)

class DocumentRead(BaseModel):
    filename: str

    title: str | None = None

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
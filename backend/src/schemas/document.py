from datetime import datetime
from fastapi import UploadFile
from pydantic import BaseModel, ConfigDict, Field


class DocumentCreate(BaseModel):
    file: UploadFile
    title: str | None = None
    description: str | None = None

    model_config = ConfigDict(arbitrary_types_allowed=True)

class DocumentRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    filename: str = Field(validation_alias="original_name")
    title: str | None = None
    content_type: str
    size: int
    description: str | None = None
    uploaded_at: datetime

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
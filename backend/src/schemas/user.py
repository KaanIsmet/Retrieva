from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class UserCreate(BaseModel):
    username: str = Field(min_length=1, max_length=100)
    email: str = Field(min_length=1, max_length=255)
    password: str = Field(min_length=8)


class UserRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    username: str
    email: str
    created_at: datetime


class PasswordChange(BaseModel):
    current_password: str
    new_password: str = Field(min_length=8)


class UserLogin(BaseModel):
    username: str
    password: str
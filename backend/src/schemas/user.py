from pydantic import BaseModel, Field


class UserCreate(BaseModel):
    id: int
    username: str
    password: str
    email: str


class PasswordChange(BaseModel):
    current_password: str
    new_password: str = Field(min_length=8)
    

class UserLogin(BaseModel):
    username: str
    password: str
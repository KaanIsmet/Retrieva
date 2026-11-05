from fastapi import APIRouter
from schemas.user import UserCreate, UserLogin

user_router = APIRouter(prefix="/user", tags=["user"])

@user_router.post("/")
def register_user(user: UserCreate):
    print(user)
    return {"message": "successfully created user"}
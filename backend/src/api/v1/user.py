from fastapi import APIRouter, Depends, HTTPException, status
from pwdlib import PasswordHash
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from database import get_db
from models.user import User
from schemas.user import UserCreate, UserRead

user_router = APIRouter(prefix="/user", tags=["user"])
password_hash = PasswordHash.recommended()


@user_router.post("/", response_model=UserRead, status_code=status.HTTP_201_CREATED)
def register_user(user: UserCreate, db: Session = Depends(get_db)) -> User:
    db_user = User(
        username=user.username,
        email=user.email,
        hashed_password=password_hash.hash(user.password),
    )
    db.add(db_user)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="A user with that username or email already exists",
        ) from None
    db.refresh(db_user)
    return db_user


@user_router.get("/", response_model=list[UserRead])
def get_users(db: Session = Depends(get_db)) -> list[User]:

    return list(db.scalars(select(User).order_by(User.id)).all())

@user_router.get("/{id}", response_model=UserRead)
def get_user(user_id, db: Session = Depends(get_db)) -> User:
    user = db.get(User, user_id)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Unable to find user by id"
        )
    return user
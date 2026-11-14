import secrets

from pwdlib import PasswordHash
from sqlalchemy import select
from sqlalchemy.orm import Session

from database import SessionLocal
from models.user import User

DEFAULT_USERNAME = "default"
DEFAULT_EMAIL = "default@retrieva.invalid"
password_hash = PasswordHash.recommended()


def seed_default_user() -> None:
    with SessionLocal.begin() as db:
        existing_user_id = db.scalar(select(User.id).limit(1))
        if existing_user_id is not None:
            return

        db.add(
            User(
                username=DEFAULT_USERNAME,
                email=DEFAULT_EMAIL,
                hashed_password=password_hash.hash(secrets.token_urlsafe(32)),
            )
        )


def get_default_user_id(db: Session) -> int:
    user_id = db.scalar(select(User.id).order_by(User.id).limit(1))
    if user_id is None:
        raise RuntimeError("The default user has not been seeded")
    return user_id
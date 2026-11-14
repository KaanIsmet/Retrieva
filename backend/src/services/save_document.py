import uuid
from pathlib import Path

from fastapi import HTTPException, UploadFile, status
from models.stored_file import StoredFile
from services.default_user import get_default_user_id
from sqlalchemy.orm import Session

UPLOAD_DIR = Path("uploads")
MAX_SIZE = 5 * 1024 * 1024  # 5MB
ALLOWED_TYPES = {"application/pdf", "text/plain"}


def save_document(
    file: UploadFile,
    title: str | None,
    description: str | None,
    db: Session,
) -> StoredFile:
    content_type = file.content_type
    if content_type is None or content_type not in ALLOWED_TYPES:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail="Only PDF and plain-text files are supported",
        )

    user_id = get_default_user_id(db)
    stored_name = uuid.uuid4().hex
    path = UPLOAD_DIR / stored_name
    size = 0

    try:
        UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
        with path.open("wb") as dest:
            while chunk := file.file.read(8192):
                if size + len(chunk) > MAX_SIZE:
                    raise HTTPException(
                        status_code=status.HTTP_413_CONTENT_TOO_LARGE,
                        detail="Uploaded file is too large",
                    )
                dest.write(chunk)
                size += len(chunk)
    except HTTPException:
        delete_saved_file(stored_name)
        raise
    except Exception as exc:
        delete_saved_file(stored_name)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to save uploaded file",
        ) from exc

    record = StoredFile(
        user_id=user_id,
        original_name=file.filename or "uploaded-file",
        stored_name=stored_name,
        title=title,
        content_type=content_type,
        size=size,
        description=description,
    )
    db.add(record)

    return record


def delete_saved_file(stored_name: str) -> None:
    (UPLOAD_DIR / stored_name).unlink(missing_ok=True)

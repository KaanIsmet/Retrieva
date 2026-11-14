from datetime import datetime, timezone

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from database import Base

class StoredFile(Base):
    __tablename__ = "stored_files"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    original_name: Mapped[str]
    stored_name: Mapped[str] = mapped_column(unique=True)  # uuid on disk
    title: Mapped[str | None] = mapped_column(nullable=True)
    content_type: Mapped[str]
    size: Mapped[int]
    description: Mapped[str | None] = mapped_column(nullable=True)
    uploaded_at: Mapped[datetime] = mapped_column(
        default=lambda: datetime.now(timezone.utc)
    )
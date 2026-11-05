from sqlalchemy import Base, Mapped, mapped_column, Text
from datetime import datetime

class Document(Base):

    __tablename__ = "documents"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(foreign_key="users.id", nullable=False)
    filename: Mapped[str] = mapped_column(nullable=False)
    title: Mapped[str | None] = mapped_column(nullable=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    status: Mapped[str] = mapped_column(nullable=False, default="processing")
    uploaded_at: Mapped[datetime] = mapped_column(nullable=False)
    
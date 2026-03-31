from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

#SQLiteのDB作成
DATABASE_URL = "sqlite:///./sqlite.db"

#エンジン作成
engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)

#セッション
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

#モデルの基底クラス
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
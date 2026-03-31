from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.User import User
import csv
from io import StringIO

#CSV → DB
router = APIRouter()

@router.post("/upload-csv")
async def upload_csv(file: UploadFile = File(...), db: Session = Depends(get_db)):
    content = await file.read()
    text = content.decode("utf-8")

    reader = csv.DictReader(StringIO(text))
    created = []

    for row in reader:
        user = User(id=int(row["id"]), name=row["name"], email=row["email"])
        db.add(user)
        created.append(row)

    db.commit()
    return {"inserted": created}

from fastapi import FastAPI, UploadFile, File, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
import csv
from io import StringIO
from app.database import Base, engine, SessionLocal
from app.models.User import User as UserModel
from app.routers import users, csv

app = FastAPI()

app.include_router(users.router)
app.include_router(csv.router)

@app.get("/")
def root():
    return {"message": "Hello FastAPI!"}

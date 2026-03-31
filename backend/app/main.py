from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from io import StringIO
from app.database import Base, engine, SessionLocal
from app.models.User import User as UserModel
from app.routers import users, csv as csv_router
import csv as csv_lib

app = FastAPI()

app.include_router(users.router)
app.include_router(csv_router.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 必要なら ["http://localhost:5173"] にしてもOK
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Hello FastAPI!"}

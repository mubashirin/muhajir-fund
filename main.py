from fastapi import FastAPI
from typing import Optional


app = FastAPI()

@app.get("/")
async def root():
    return {"version": "0.0.1"}

@app.get("/data/")
async def read_item():
    return {
        "title": "Благотворительный фонд «Мухаджир»",
        "description": "Мы помогаем нуждающимся, поддерживаем благотворительные проекты и стремимся сделать мир лучше. Присоединяйтесь к нам в этом благородном деле!",
        "address": "Istanbul, Agaoglu Caddesi, 12/45",
        "phone": "+90 533 123 45 67",
        "email": "info@muhajir.org",
        "social": {
            "facebook": "https://www.facebook.com/muhajir",
            "instagram": "https://www.instagram.com/muhajir",
        }
    }

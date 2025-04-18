from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional


app = FastAPI()

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Разрешаем запросы с Next.js
    allow_credentials=True,
    allow_methods=["*"],  # Разрешаем все методы
    allow_headers=["*"],  # Разрешаем все заголовки
)

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

from fastapi import FastAPI
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://muhajir.org",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Content-Type", "Authorization"]
)

@app.get("/")
async def root():
    return {"version": "0.0.1"}

@app.get("/data/")
async def read_item():
    return {
        "title": "Благотворительный фонд «Мухаджир»",
        "description": "- это благотворительная организация дагестанской диаспоры. Мы помогаем нашим землякам, которые оказались в трудной жизненной ситуации. Под нашей опекой вдовы, сироты, семьи с плохим финансовым положением. Несмотря на непростую обстановку в мире и ограниченность в ресурсах, мы делаем всё, чтобы наши подопечные чувствовали заботу и знаменитое дагестанское братство. Вы тоже можете поучаствовать в этом благом деле и протянуть руку помощи нашим сёстрам и братьям. Чтобы поделиться своими идеями и предложениями, нажмите на кнопку ниже.",
        "address": "Istanbul, Agaoglu Caddesi, 12/43",
        "phone": "+90 533 123 45 61",
        "email": "info@muhajir-foundation.com",
        "social": {
            "facebook": "https://www.facebook.com/muhajir",
            "instagram": "https://www.instagram.com/muhajir",
            "telegram": "https://t.me/muhajir",
            "youtube": "https://www.youtube.com/channel/UC_9-kyTW8ZkZNDHQJ6FgpwQ",
            "vk": "https://vk.com/muhajir",
        }
    }

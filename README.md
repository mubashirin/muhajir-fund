# Благотворительный фонд «Мухаджир»

Веб-сайт благотворительного фонда «Мухаджир», разработанный на Next.js с FastAPI бэкендом.

## Технологии

### Фронтенд
- Next.js 14
- TypeScript
- TailwindCSS
- Font Awesome

### Бэкенд
- FastAPI
- SQLAlchemy
- PostgreSQL

## Структура проекта

### Фронтенд
- `app/` - основные компоненты и страницы
- `public/` - статические файлы
- `types/` - TypeScript типы
- `lib/` - утилиты и API клиент

### Бэкенд
- `api/` - FastAPI приложение
- `models/` - модели данных
- `schemas/` - Pydantic схемы
- `database/` - конфигурация базы данных

## Установка

### Фронтенд
```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build
```

### Бэкенд
```bash
# Установка зависимостей
pip install -r requirements.txt

# Запуск сервера разработки
uvicorn main:app --reload
```

## API Endpoints

- `GET /api/main` - контент главной страницы
- `GET /api/contacts` - контактная информация
- `GET /api/social` - ссылки на социальные сети

## Переменные окружения

### Фронтенд (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Бэкенд (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

## Лицензия

© 2024 Благотворительный фонд «Мухаджир». Все права защищены.

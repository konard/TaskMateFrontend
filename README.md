# TaskMate Frontend

Frontend приложение для системы управления задачами TaskMate, построенное на React + TypeScript + Vite.

## Технологический стек

- **React 18** - UI библиотека
- **TypeScript** - Типизация
- **Vite** - Сборщик и dev сервер
- **React Router** - Маршрутизация
- **Zustand** - State management
- **TanStack Query** - Управление серверным состоянием
- **Axios** - HTTP клиент
- **Tailwind CSS** - CSS фреймворк
- **date-fns** - Работа с датами
- **react-hook-form** - Работа с формами

## Требования

- Node.js 18+
- npm или yarn

## Установка

```bash
# Установка зависимостей
npm install

# Создать .env файл на основе .env.example
cp .env.example .env

# Отредактировать .env и указать правильный API URL
# VITE_API_BASE_URL=http://localhost:8000/api/v1
```

## Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

## Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут в папке `dist/`

## Предпросмотр продакшен сборки

```bash
npm run preview
```

## Docker

### Сборка образа

```bash
docker build -t taskmate-frontend .
```

### Запуск контейнера

```bash
docker run -p 80:80 taskmate-frontend
```

Приложение будет доступно по адресу `http://localhost`

### Docker Compose

Добавьте в `docker-compose.yml`:

```yaml
services:
  frontend:
    build: ./taskmate-frontend
    ports:
      - "80:80"
    environment:
      - VITE_API_BASE_URL=http://api:8000/api/v1
    depends_on:
      - api
```

## Структура проекта

```
src/
├── api/                 # API клиент и endpoints
│   ├── client.ts        # Axios instance
│   ├── auth.ts          # Аутентификация
│   ├── users.ts         # Пользователи
│   ├── tasks.ts         # Задачи
│   └── dashboard.ts     # Dashboard
│
├── components/          # React компоненты
│   ├── auth/           # Компоненты аутентификации
│   ├── layout/         # Layout компоненты
│   ├── users/          # Компоненты пользователей
│   └── tasks/          # Компоненты задач
│
├── pages/              # Страницы приложения
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   ├── UsersPage.tsx
│   └── TasksPage.tsx
│
├── stores/             # Zustand stores
│   └── authStore.ts
│
├── hooks/              # Custom hooks
│   ├── useAuth.ts
│   └── usePermissions.ts
│
├── types/              # TypeScript типы
│   ├── user.ts
│   ├── task.ts
│   ├── api.ts
│   └── dashboard.ts
│
├── utils/              # Утилиты
└── constants/          # Константы
```

## Аутентификация

Приложение использует Bearer Token аутентификацию (Laravel Sanctum):

1. Пользователь вводит логин и пароль
2. После успешного входа токен сохраняется в localStorage
3. Токен автоматически добавляется ко всем API запросам
4. При получении 401 ошибки пользователь перенаправляется на страницу входа

## Роли и права доступа

- **employee** - Сотрудник (базовый доступ)
- **observer** - Наблюдатель (только чтение)
- **manager** - Управляющий (создание/редактирование задач и пользователей)
- **owner** - Владелец (полный доступ)

## Переменные окружения

- `VITE_API_BASE_URL` - URL API сервера (по умолчанию: `http://localhost:8000/api/v1`)

## Документация API

Смотрите файл `creating_intructions/FRONTEND_GUIDE.md` для подробной документации по интеграции с API.

## Лицензия

Proprietary License
Copyright © 2023-2025 谢榕川 All rights reserved.

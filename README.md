# FaceItAIAnalyzer

Приложение для анализа статистики матчей CS2 с FACEIT: получает данные игроков через FACEIT API и помогает анализировать их с помощью ИИ-агента.

## Стек

- Next.js 16 (App Router) + React 19
- TypeScript
- CSS Modules для стилей
- ESLint 9

## Запуск

Требуется Node.js 20+ и npm.

```bash
npm install        # установить зависимости
npm run dev        # дев-сервер на http://localhost:3000 (Turbopack)
```

Продакшен-сборка:

```bash
npm run build      # сборка + проверка типов
npm start          # запуск собранного приложения
```

Проверки:

```bash
npm run lint          # ESLint
npm run typecheck     # TypeScript (tsc --noEmit)
npm run format        # отформатировать всё Prettier-ом
npm run format:check  # проверить форматирование
```

При коммите husky + lint-staged автоматически проверяют стейдженные файлы
(ESLint + Prettier); хуки устанавливаются при `npm install`. CI на GitHub
Actions прогоняет lint + typecheck + build для каждого PR.

## Структура

- `app/` — страницы и layout (App Router)
- `public/` — статические файлы

## Разработка в команде

Процесс работы (ветки, PR, ревью, релизы) — в [CONTRIBUTING.md](CONTRIBUTING.md).

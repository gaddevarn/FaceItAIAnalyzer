# Памятка по работе с репозиторием

Процесс для команды. Новичок: прочитай файл целиком — этого достаточно, чтобы влиться в работу.

## Ветки

| Ветка | Назначение |
|-------|------------|
| `main` | стабильная версия, сюда попадают только релизы |
| `dev` | рабочая ветка, сюда мержатся все фичи |
| `feature/*` | ветка под конкретную задачу (`feature/player-search`) |

В `main` и `dev` напрямую не коммитим — только через PR.

## Цикл работы над задачей

```bash
# 1. Обновиться и создать ветку от dev
git switch dev
git pull
git switch -c feature/имя-задачи

# 2. Работать: коммитить часто
git status                          # что изменилось
git diff                            # посмотреть изменения
git add -p                          # добавить изменения по кускам
git commit -m "feat: поиск игрока по нику"

# 3. Опубликовать ветку (первый раз с -u)
git push -u origin feature/имя-задачи
```

## Перед созданием PR — подтянуть свежую dev

```bash
git fetch origin
git rebase origin/dev

# если конфликты: правим файлы вручную, потом
git add <файлы>
git rebase --continue
# передумали: git rebase --abort

git push --force-with-lease         # после rebase уже запушенной ветки
```

## Создание PR

```bash
gh pr create --base dev --title "feat: поиск игрока"
```

Без gh CLI — открыть в браузере:
`https://github.com/gaddevarn/FaceItAIAnalyzer/compare/dev...feature/имя-задачи`

## Ревью и мерж

```bash
gh pr list                          # открытые PR
gh pr checkout 12                   # забрать PR локально, посмотреть код
gh pr view 12 --web                 # открыть в браузере
gh pr merge 12 --squash --delete-branch
```

Ревьюит напарник. Мержим squash-ом, ветку после мержа удаляем.

## Релиз

Периодически — PR `dev → main` (или fast-forward) и тег на `main`:

```bash
git switch main && git pull
git merge --ff-only dev
git tag v0.1.0
git push origin main --tags
```

## Полезное на каждый день

```bash
git restore <файл>                  # откатить изменения в файле
git restore --staged <файл>         # убрать файл из стейджа
git commit --amend                  # поправить последний коммит (до пуша)
git reset --soft HEAD~1             # отменить коммит, оставив изменения
git stash                           # временно спрятать изменения
git stash pop                       # вернуть их обратно
git log --oneline -10               # последние коммиты
```

## Правила

- Задачи — в GitHub Issues; подход обсуждаем до кода
- Коммиты: `feat:` / `fix:` / `chore:` / `docs:`
- PR маленькие, ветки живут 1–3 дня
- Кто автор фичи — тот и решает конфликты
- `.env*` не коммитим; новые переменные окружения добавляем в `.env.example`
- После мержа: `git switch dev && git pull`, старую ветку удалить

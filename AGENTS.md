<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Project

App for analyzing CS2 player statistics from the FACEIT API, with AI-agent-assisted
analysis for the user. Early stage — scaffold only.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build (also typechecks)
- `npm start` — serve production build
- `npm run lint` — ESLint (flat config)

## Stack

Next.js 16 (App Router, no `src/`), React 19, TypeScript, Tailwind CSS v4,
ESLint 9, npm. Import alias `@/*`.

## Secrets

`.opencode.json` contains a live API key in plaintext. It is gitignored —
never commit it, copy it into other files, or log its contents.

## Maintenance

When more tooling lands (tests, CI, env handling), record exact commands,
required order, and conventions here.

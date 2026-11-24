# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Ortopedia.MD — storefront site for a Moldovan shop selling orthopedic footwear for children (two physical stores: Elat, Baby Hall). UI copy is in Romanian, with a RO/RU language switch planned. Early stage: the repo has no commits yet and no test setup on either side.

Two independent apps, no shared tooling at the root:

- `frontend/` — React 19 + TypeScript + Vite
- `backend/` — FastAPI (Python 3.12, virtualenv in `backend/.venv`)

## Commands

Frontend (run inside `frontend/`):

```bash
npm install
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build (type errors fail the build)
npm run lint      # eslint .
npm run preview
```

Backend (run inside `backend/`):

```bash
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload    # app object is `app` in main.py
```

No test framework is configured yet.

## Architecture notes

- **Backend:** `main.py` creates the FastAPI app and a `v1_router` with prefix `/api/v1`. New endpoints belong on that router (or on sub-routers included into it). Note that `app.include_router(v1_router)` currently runs *before* any routes are added to the router. FastAPI copies routes at include time, so routes added afterwards won't be registered unless the include is moved after them.
- **Frontend has no API client, router or state library yet.** `App.tsx` renders only `Header`.
- **Design reference:** `frontend/assets/Main.dc.html` is a static mockup of the full homepage (sections in order: utility bar, header, hero, shop by size, categories, why orthopedic, new arrivals, brands, guides, stores, footer). It is gitignored (`frontend/assets/`) and is used as the visual source of truth when building components. Don't confuse it with `frontend/src/assets/`, which is tracked.
- **Styling:** plain global CSS in `src/assets/index.css`, no CSS modules or Tailwind. The `:root` block defines design tokens (brand colors, `--font-display` Nunito / `--font-body` Inter, `--text-*` type scale, `--space-*`, `--radius-*`, shadows, `--touch-target: 44px`, `--focus-ring`). Use these tokens rather than literal values. Component classes follow a BEM-like hyphenated naming scheme (`header-bottom-menu-item`), and each component's rules are grouped in the same global file.
- **Icons:** Font Awesome 7 is loaded via CDN in `index.html` and used as `<i className='fa-solid fa-…'>`. `@fortawesome/react-fontawesome` is installed but currently unused.
- **Components:** each one lives in `src/components/<Name>/<Name>.tsx` as a default-exported function with an explicit `JSX.Element` return type. Code style uses single quotes in JSX attributes.
- **i18n:** i18next + react-i18next, set up in `src/i18n/index.ts` (languages `ro` default, `ru`, `en`; choice saved in localStorage; `<html lang>` and title follow it). UI strings live in `src/i18n/locales/{ro,en,ru}.json`, grouped by component. `ro.json` is the source of truth for types (`src/i18n/i18next.d.ts`), so an unknown key passed to `t()` fails the build. Add every new key to all three files, including each language's plural suffixes (`_one/_few/_other` ro, `_one/_other` en, `_one/_few/_many/_other` ru). Fetched/data content (category names, products, guides, store names) is not translated through these files. Arrows (`→`) are appended in JSX, not stored in strings.
- TS config is strict about unused locals/params and uses `verbatimModuleSyntax`, so type-only imports must use `import { type X }`.

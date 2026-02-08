# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 14 App Router** application providing developer CSS utilities (unit conversion, responsive clamp sizing).

**Key directories:**
- `app/` — Pages: `/` (home), `/px-converter`, `/clamp`
- `components/` — Feature components with co-located CSS Modules; `ui/` contains Radix UI wrappers
- `utils/` — Conversion logic (`convertions.ts`), color tokens (`colors.ts`), helpers
- `types/` — Shared TypeScript interfaces

**Styling approach:** CSS Modules for component styles + Tailwind utilities + CSS custom properties for theming. Colors use OKLCH color space with `--text-primary`, `--bg-color`, etc. as semantic variables. Dark mode via `class` strategy (`next-themes`).

**State:** Local React state only (useState/useEffect). No global state manager.

**Animations:** Framer Motion for header/menu transitions.

**Component pattern:** Each component lives in its own folder with a `.tsx` and `.module.css` file. Re-exported from `components/index.ts`.

## Conventions

- Prettier: single quotes, no semicolons (`.prettierrc`)
- TypeScript strict mode with `@/*` path alias for project root
- `react-hooks/exhaustive-deps` ESLint rule is disabled

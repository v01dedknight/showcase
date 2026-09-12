# v01d.dev — portfolio redesign

Полностью переработанная версия портфолио на React + TypeScript + Vite.

## Что изменено

- новая product-engineer подача вместо типового freelancer landing page;
- интерактивный hero с pointer glow;
- reveal-анимации через IntersectionObserver;
- micro-interactions для навигации, CTA, карточек и mockup;
- mobile navigation;
- reduced-motion fallback;
- обновлены SEO title / description / Open Graph metadata;
- структура адаптирована под desktop, tablet и mobile.

## Запуск

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
```

В `vite.config.ts` сохранён `base: '/showcase/'` для текущего GitHub Pages deployment. Если сайт переедет на корневой домен, замените на `base: '/'`.

## Основные файлы

- `src/App.tsx` — структура, контент и интерактивность;
- `src/index.css` — дизайн-система, responsive layout и анимации;
- `index.html` — metadata и SEO.

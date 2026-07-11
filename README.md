# Jiya Jain — Portfolio

A modern, responsive personal portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**. The design uses an IDE/code-editor motif (window-chrome cards, monospace section labels) as its signature visual thread, fitting for a Computer Science / Java developer's portfolio.

## Tech stack

- React 19 + Vite
- Tailwind CSS (with a custom design-token theme in `tailwind.config.js`)
- Framer Motion for animations
- react-icons for iconography

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # replace with your real resume
├── src/
│   ├── components/         # one component per section/UI piece
│   ├── context/ThemeContext.jsx   # dark/light mode (persisted to localStorage)
│   ├── data/portfolio.js   # ALL editable content lives here
│   ├── hooks/useTypingEffect.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html               # SEO meta tags live here
├── tailwind.config.js
└── vercel.json               # SPA rewrite rule for deployment
```

## Editing content

Almost everything you'd want to change (name, bio, skills, projects, education, achievements, links) lives in **`src/data/portfolio.js`** — edit that one file rather than hunting through components.

To swap the placeholder profile photo, replace the `JJ` monogram block in `src/components/Hero.jsx` with an `<img>` tag pointing at an image in `public/`.

To replace the placeholder resume, drop your real PDF at `public/resume.pdf` (same filename), or update `profile.resumeUrl` in `src/data/portfolio.js`.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — `vercel.json` is already included so client-side routing/refreshes work correctly.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```

## Notes

- The contact form validates client-side and opens the visitor's email client (via `mailto:`) pre-filled with their message, since there's no backend wired up. Swap `handleSubmit` in `src/components/Contact.jsx` for a real API call (e.g. Formspree, EmailJS, or your own endpoint) when you're ready.
- Dark/light mode preference is saved to `localStorage` under the key `jiya-portfolio-theme`.

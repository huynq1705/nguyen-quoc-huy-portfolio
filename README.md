# Portfolio — Nguyen Quoc Huy

Personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and next-intl.

## Features

- Bilingual VI/EN toggle
- Dark theme with gradient accents
- Project case studies (NDA-safe)
- Interactive CV page with print/download
- Contact section

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo to Vercel dashboard.

## Structure

- `/` — Home with hero, about, expertise, featured projects
- `/projects` — All projects grid
- `/projects/[slug]` — Case study detail
- `/cv` — Interactive CV (print to PDF)
- `/contact` — Contact information

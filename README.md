# AbleSpace Landing Page

Marketing landing page for **AbleSpace** — AI-powered IEP tracking for special education professionals.

Built with React 18, TypeScript, Vite 6, and Tailwind CSS v4.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build
```

Output is written to the `dist/` directory.

### Preview production build locally

```bash
npm run preview
```

Open [http://localhost:4173](http://localhost:4173) to verify the built site.

## Deployment

### Vercel

1. Push the repo to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Vercel auto-detects Vite — no configuration needed.
4. Deploy.

### Netlify

1. Push the repo to GitHub.
2. Create a new site on [netlify.com](https://netlify.com) → "Import from Git".
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

Both platforms will serve `dist/index.html` for all routes automatically.

## Project Structure

```
ablespace-seline/
├── src/
│   ├── app/
│   │   ├── App.tsx              # Root component + navbar + hero
│   │   └── components/
│   │       ├── features-section.tsx
│   │       ├── social-proof-strip.tsx
│   │       ├── secure-collaboration-section.tsx
│   │       ├── ablespace-ai-section.tsx
│   │       ├── testimonials-section.tsx
│   │       ├── cta-banner-section.tsx
│   │       └── footer-section.tsx
│   ├── assets/                  # Static images
│   └── styles/                  # CSS (fonts, theme, Tailwind)
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Tech Stack

| Layer | Library |
|-------|---------|
| UI Framework | React 18 |
| Language | TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 |
| Components | Radix UI / shadcn-ui |
| Icons | Lucide React |
| Charts | Recharts |

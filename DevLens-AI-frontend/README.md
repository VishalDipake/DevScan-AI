# DevLens AI — Frontend

Production frontend for DevLens AI, a website engineering auditing tool. Built with React, TypeScript, Vite, Tailwind CSS v4, React Router, Axios, React Hook Form, Lucide React and Framer Motion.

## Getting started

```bash
npm install
cp .env.example .env   # adjust VITE_API_URL if your backend runs elsewhere
npm run dev
```

The frontend expects a backend at `VITE_API_URL` (default `http://localhost:5000`) exposing:

```
POST /api/scan
Body: { "url": "https://example.com" }
Response: { "success": true, "data": <ScanResult> }
```

See `src/types/scan.ts` for the exact `ScanResult` shape the UI renders.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check (`tsc -b`) and produce a production build in `dist/`
- `npm run preview` — preview the production build locally

## Structure

```
src/
├── components/{dashboard,layout,scan,ui}/
├── hooks/            useScan — scan submission + truthful stage messaging
├── pages/             Home.tsx, Dashboard.tsx
├── routes/            AppRoutes.tsx
├── services/          api.ts (Axios instance), scan.service.ts (scanWebsite)
├── types/             api.ts, scan.ts — mirror the backend contract exactly
├── utils/             scoring.ts (status derivation), validation.ts (URL checks)
└── index.css          design tokens (Tailwind v4 @theme)
```

## Notes

- The UI renders only real backend data — no mock/sample/fake content anywhere. Empty arrays are always shown as explicit "no X captured" states, never padded.
- Scan progress shows truthful UI stages (no fake percentages), since the backend doesn't report progress.
- Screenshot URLs are resolved from `VITE_API_URL` + the backend's root-relative path — never hardcoded.

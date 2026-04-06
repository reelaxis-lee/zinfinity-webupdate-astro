# Zinfinity Tech Website

## Overview
A professional corporate website for Zinfinity Tech built with Astro 6, React 18, TypeScript, and Tailwind CSS / Shadcn UI. Fully server-side rendered with React islands for interactivity.

## Architecture

### Framework
- **Framework**: Astro 6 (SSR mode with @astrojs/node standalone adapter)
- **React Islands**: @astrojs/react for all interactive components
- **Build Tool**: Astro's Vite integration
- **Styling**: Tailwind CSS + Shadcn UI components
- **Routing**: Astro file-based routing (server-side)

### Pages Structure
- `src/pages/` — Astro route files (24 routes total)
- `src/components/pages/` — React page components (rendered as client:load islands)
- `src/components/` — Shared React components (Navigation, Footer, WorldMap, etc.)
- `src/layouts/BaseLayout.astro` — Base layout with fonts, meta, CookieConsent

### API
- `src/pages/api/send-form-email.ts` — Astro API endpoint for email sending via Postmark
- **Provider**: Postmark
- **Secret**: `POSTMARK_API_TOKEN` environment variable required
- **Sends to**: `info@zinfinity.tech`, `teamred@reelaxis.com`
- **From**: `teamred@reelaxis.com`

### Router Wrapper
- `src/lib/router.tsx` — Custom Link and useLocation wrappers (replaces react-router-dom)
- `useLocation` uses useState("/") + useEffect to avoid SSR hydration mismatches

## Development

```bash
npx astro dev --port 5000   # Start development server (configured in workflow)
node ./dist/server/entry.mjs  # Production server (after astro build)
```

## All Routes (24 total)
**Main pages (9)**:
- `/` — Home
- `/solutions` — Solutions
- `/partners` — Partners (all vendor logos)
- `/resources` — Resources hub (filter/sort blogs + case studies)
- `/contact` — Contact form
- `/privacy-policy` — Privacy Policy
- `/terms` — Terms and Conditions
- `/404` — Custom 404 page

**Blog posts (13)** — at `/resources/blog/<slug>`:
- `rethinking-ai-agent-craze`, `ai-readiness-practical-path`, `ai-phishing-threat`
- `beyond-cloud-ai-rebrand`, `nutanix-enterprise-ai`, `big-data-analytics`
- `dell-data-lakehouse`, `tech-meets-bbq-baseball`, `toys-for-tots-sponsor`
- `infinidat-rising-star`, `dell-platinum-tier`, `d8taops-partnership`, `zinfinity-crn-2025`

**Case Studies (2)** — at `/resources/case-studies/<slug>`:
- `school-district-ups-modernization`, `training-center-it-deployment`

## Forms
Two forms use `/api/send-form-email`:
1. **Contact form** (`/contact`) — requires name, email, message; company optional
2. **AI Readiness Assessment** (floating banner on home page) — requires name, company, email

## Environment Variables
| Variable | Purpose |
|----------|---------|
| `POSTMARK_API_TOKEN` | Postmark API token for sending emails (server-side only) |

## Image Handling
- All image imports in React islands use `getImageSrc()` from `@/lib/utils`
- This handles both string URLs and Astro ImageMetadata objects
- Navigation logos: `getImageSrc(logoColor)` / `getImageSrc(logoWhite)`

## Key Notes
- Tailwind works via `postcss.config.js` (not @astrojs/tailwind due to peer dep conflicts with Astro 6)
- ZoomInfo tracking script is loaded in BaseLayout.astro (requires production domain)
- CookieConsent is a client:load island in BaseLayout.astro (appears on all pages)
- Deployment run command: `node ./dist/server/entry.mjs`

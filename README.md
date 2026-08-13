# InfraGrid-NexusOS public website

This repository contains the public project and hardware-sponsorship website for InfraGrid-NexusOS (IGNOS), an independent GPU-compute orchestration project by Anthony Yancy.

This repository contains only the public website. It does not contain IGNOS application source code, credentials, private architecture, provider integrations, or other proprietary project material.

## Edit the website

- Update page content in `app/page.tsx`.
- Update colors, spacing, typography, and responsive behavior in `app/globals.css`.
- Update the browser title and description in `app/layout.tsx`.
- Replace `public/favicon.svg` to change the browser icon.

## Run locally

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Deploy with Vercel

Import this repository as a new Vercel project. Vercel should detect Next.js automatically. Keep the framework, root directory, build command, and output settings at their defaults, then deploy.

After the repository is connected, every commit to the `main` branch will trigger a new production deployment.

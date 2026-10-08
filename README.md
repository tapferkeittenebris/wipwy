# Career Connected Learning — Vercel-ready prototype

This is the Vercel-compatible Next.js build prepared from the CCL site source.

## Run locally

- Install Node.js 20.9 or later.
- Run `npm install`.
- Run `npm run dev` to preview, or `npm run build` to verify a production build.

## Prototype behavior

- District reporting requires no sign-in and accepts aggregate counts only.
- Sample rows are illustrative. New submissions are stored in the current browser's local storage and update that browser's dashboard; they are not shared across users or devices.
- The current dashboard is not a production statewide reporting system. A shared data service, ownership and retention policies, validation/review, and WDE/DWS reporting access still need to be implemented before collecting official district measures.
- Wyoming safety and legal resources are linked as working guidance and need review by the appropriate state authorities before operational use.

## Deploy

Import this folder into a Git repository and connect that repository to Vercel, or deploy from a Vercel CLI session using the project owner’s Vercel account. This source bundle does not include secrets or a production database.

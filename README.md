# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploying to Vercel

The build auto-detects Vercel (the `VERCEL` environment variable is set during a Vercel build) and outputs Vercel Functions.

- Upload/push the project so that `vite.config.ts`, `package.json` and `src/` sit at the **repository/upload root** (not inside an extra subfolder).
- Framework preset: let Vercel auto-detect (or choose "Other"). Build command: `bun run build`.
- No other settings are needed; `src/router.tsx` must be present in the uploaded files.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

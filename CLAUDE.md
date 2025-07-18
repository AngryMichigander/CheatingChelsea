# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.3 application with TypeScript, React 18, and multiple deployment options. The app exposes harmful activities and supports Kristen Jacobs through a GoFundMe campaign.

## Essential Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack on port 9002
npm run genkit:dev   # Start Genkit AI development server
npm run genkit:watch # Start Genkit with file watching

# Production
npm run build        # Build with git commit hash injection
npm run build:static # Standard Next.js build
npm run start        # Start production server

# Quality Checks
npm run lint         # Run Next.js linting
npm run typecheck    # Run TypeScript type checking

# Deployment
npm run deploy:s3    # Deploy to AWS S3 bucket (requires S3_BUCKET_NAME env var)
npm run create-s3-bucket # Interactive S3 bucket setup
```

## Architecture Overview

### App Structure
- **App Router**: Uses Next.js App Router in `src/app/`
- **Pages**: Homepage, Gallery (YouTube videos), Dadvocate (curated videos), Long Story
- **Static Export**: Configured with `output: 'export'` for static hosting
- **Deployment**: AWS S3 static hosting

### Key Patterns
1. **UI Components**: Full shadcn/ui component library in `src/components/ui/`
2. **Styling**: Tailwind CSS with custom theme, use `cn()` utility for class merging
3. **Data Fetching**: Server-side fetching with fallback data, 1-hour cache for YouTube API
4. **Environment Variables**: `YOUTUBE_API_KEY` (required), `S3_BUCKET_NAME` (for deployment)
5. **Path Alias**: Use `@/` for imports from `src/` directory

### Build & Deployment Details
- **Version Tracking**: Build process injects git commit hash into footer via `scripts/set-git-commit.js`
- **Static Files**: Build outputs to `out/` directory for S3 deployment
- **Build Errors**: TypeScript and ESLint errors are ignored (configured in next.config.ts)
- **S3 Deployment**: Uses dotenv-cli to load environment variables from `.env.local`
- **Pre-commit Hooks**: Husky installed for running lint checks before commits

### Development Notes
- **No Testing Framework**: Project currently has no test setup
- **AI Integration**: Genkit configured with Google AI (Gemini 2.0 Flash) but minimally implemented
- **Theme**: Dark/light mode support via next-themes
- **Image Optimization**: Configured for YouTube thumbnails and placeholder images

### Adding Features
- New pages: Create directory in `src/app/` with `page.tsx` and export metadata
- New components: Add to `src/components/` or use existing shadcn/ui components
- YouTube videos: Update video IDs in gallery/page.tsx or dadvocate/page.tsx, then rebuild

## Code Style Guidelines
- Always use 'tea' instead of 'gh'
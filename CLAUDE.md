# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.3 application with TypeScript, React 18, and Firebase hosting. The app exposes harmful activities and supports Kristen Jacobs through a GoFundMe campaign.

## Essential Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack on port 9002
npm run genkit:dev   # Start Genkit AI development server
npm run genkit:watch # Start Genkit with file watching

# Production
npm run build        # Build the Next.js application
npm run start        # Start production server

# Quality Checks
npm run lint         # Run Next.js linting
npm run typecheck    # Run TypeScript type checking
```

## Architecture Overview

### App Structure
- **App Router**: Uses Next.js App Router in `src/app/`
- **Pages**: Homepage, Gallery (YouTube videos), Dadvocate (curated videos), Long Story
- **Static Generation**: Pages use static generation with ISR for external data
- **Deployment**: Supports GitHub Pages, Firebase App Hosting, and Vercel

### Key Patterns
1. **UI Components**: Full shadcn/ui component library in `src/components/ui/`
2. **Styling**: Tailwind CSS with custom theme, use `cn()` utility for class merging
3. **Data Fetching**: Server-side fetching in page components with fallback data
4. **Environment Variables**: Only `YOUTUBE_API_KEY` is used
5. **Path Alias**: Use `@/` for imports from `src/` directory

### Development Notes
- **Build Configuration**: TypeScript and ESLint errors are ignored during builds
- **YouTube API**: Gallery and Dadvocate pages fetch video data with 1-hour cache
- **AI Integration**: Genkit setup exists but is minimally implemented
- **Theme**: Dark/light mode support via next-themes

### Adding Features
- New pages: Create directory in `src/app/` with `page.tsx` and metadata export
- New components: Add to `src/components/` or use existing shadcn/ui components
- API integration: Use server components with async/await and error handling
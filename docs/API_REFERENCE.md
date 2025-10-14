# API Reference

This document provides comprehensive API documentation for the cheatingchelsea project modules.

## Table of Contents
- [Configuration](#configuration)
- [YouTube Integration](#youtube-integration)
- [Page Components](#page-components)
- [Utilities](#utilities)

---

## Configuration

### `src/lib/config.ts`

**config** (Constant)
```typescript
config = {
  youtubeApiKey: process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '',
};
```

Configuration object for environment-specific settings.

**Properties:**
- `youtubeApiKey` (string): YouTube API key from environment variables, falls back to empty string if not set

**Usage:**
```typescript
import { config } from '@/lib/config';

const apiKey = config.youtubeApiKey;
```

---

## YouTube Integration

### `src/app/gallery/page.tsx`

#### **getYouTubeVideos**
```typescript
async function getYouTubeVideos(ids: string[]): Promise<Video[]>
```

Fetches video metadata from YouTube API with fallback handling.

**Parameters:**
- `ids` (string[]): Array of YouTube video IDs to fetch

**Returns:**
- `Promise<Video[]>`: Array of video objects with id and title

**Behavior:**
1. Checks for `YOUTUBE_API_KEY` environment variable
2. Falls back to hardcoded data if API key missing
3. Fetches from YouTube API v3 with 1-hour cache (`revalidate: 3600`)
4. Returns fallback data on API errors or empty responses
5. Logs warnings for missing videos (private/deleted)

**Error Handling:**
- Missing API key → fallback data + console warning
- API request failure → fallback data + console error
- Partial results → uses what's available + console warning

**Example:**
```typescript
const videoIds = ['dQw4w9WgXcQ', 'jNQXAC9IVRw'];
const videos = await getYouTubeVideos(videoIds);
```

#### **Video** (Interface)
```typescript
interface Video {
  id: string;
  title: string;
}
```

**Properties:**
- `id` (string): YouTube video ID
- `title` (string): Video title from API or fallback

#### **videoIds** (Constant)
Array of YouTube video IDs for gallery page display.

#### **fallbackData** (Constant)
Hardcoded video data used when YouTube API unavailable.

#### **GalleryPage** (Function Component)
```typescript
export default async function GalleryPage()
```

Server component that fetches and displays YouTube videos in a gallery layout.

**Features:**
- Server-side data fetching
- Responsive grid layout (1-3 columns)
- YouTube embed integration
- Metadata export for SEO

---

### `src/app/dadvocate/page.tsx`

Similar structure to gallery page with curated video selection.

#### **DadvocatePage** (Function Component)
```typescript
export default async function DadvocatePage()
```

Server component displaying curated "dadvocate" videos.

---

## Page Components

### `src/app/page.tsx`

#### **Home** (Function Component)
```typescript
export default function Home()
```

Homepage component with project introduction and navigation.

**Features:**
- Hero section with project description
- Navigation cards to gallery and dadvocate pages
- GoFundMe campaign integration
- Responsive layout

#### **metadata** (Constant)
```typescript
export const metadata: Metadata
```

SEO metadata for homepage.

---

### `src/app/layout.tsx`

#### **RootLayout** (Function Component)
```typescript
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>)
```

Root layout component wrapping all pages.

**Features:**
- Inter font family configuration
- Theme provider integration (dark/light mode)
- Footer component inclusion
- Global styles application

**Parameters:**
- `children` (React.ReactNode): Page content to render

#### **inter** (Constant)
Font configuration for Inter typeface.

#### **metadata** (Constant)
Global site metadata for SEO.

---

### `src/app/not-found.tsx`

Custom 404 error page with navigation back to home.

---

## Utilities

### `src/lib/utils.ts`

#### **cn** (Function)
```typescript
function cn(...inputs: ClassValue[]): string
```

Utility for merging Tailwind CSS class names with conflict resolution.

**Parameters:**
- `...inputs` (ClassValue[]): Class names to merge

**Returns:**
- `string`: Merged class string with conflicts resolved

**Example:**
```typescript
cn('px-2 py-1', 'px-4') // Returns: 'py-1 px-4'
```

**Implementation:**
Uses `clsx` for conditional classes and `tailwind-merge` for conflict resolution.

---

## Environment Variables

### Required
- `YOUTUBE_API_KEY`: YouTube Data API v3 key for video metadata fetching

### Optional
- `NEXT_PUBLIC_YOUTUBE_API_KEY`: Client-side YouTube API key (fallback)
- `S3_BUCKET_NAME`: AWS S3 bucket for deployment
- `NEXT_PUBLIC_GIT_COMMIT`: Git commit hash (auto-generated during build)

---

## Build Scripts

### `scripts/set-git-commit.js`

Node script that injects git commit hash into `.env.local`.

**Behavior:**
1. Executes `git rev-parse --short HEAD`
2. Reads existing `.env.local` if present
3. Removes previous `NEXT_PUBLIC_GIT_COMMIT` line
4. Appends new commit hash
5. Writes to `.env.local`

**Error Handling:**
- Exits with code 1 on git command failure
- Logs error messages to console

### `scripts/create-s3-bucket.js`

Interactive CLI script for S3 bucket setup.

**Features:**
- Prompts for bucket name and AWS region
- Creates S3 bucket via AWS CLI
- Enables static website hosting
- Configures public read access policy
- Disables public access blocks
- Provides deployment instructions

**Requirements:**
- AWS CLI installed and configured
- Appropriate AWS permissions

**Usage:**
```bash
npm run create-s3-bucket
```

---

## Type Definitions

### YouTube API Types

```typescript
interface YouTubeVideoItem {
  id: string;
  snippet: {
    title: string;
  };
}
```

Internal type for YouTube API v3 response items.

---

## Caching Strategy

### YouTube API Calls
- **Revalidation**: 3600 seconds (1 hour)
- **Strategy**: Server-side fetch with Next.js cache
- **Fallback**: Hardcoded data on API failure

### Static Export
- **Build**: Pre-renders all pages at build time
- **Deployment**: Static HTML/CSS/JS to S3
- **Updates**: Requires rebuild and redeploy

---

## Error Handling Patterns

### YouTube API
1. **Missing API Key**: Fallback data + warning log
2. **Network Errors**: Fallback data + error log
3. **Empty Response**: Fallback data + warning log
4. **Partial Results**: Use available + warning log

### Build Process
1. **Git Command Failure**: Exit with error code 1
2. **TypeScript Errors**: Ignored in production build
3. **ESLint Errors**: Ignored in production build

---

## Performance Considerations

### Data Fetching
- Server-side only (no client waterfalls)
- 1-hour cache for YouTube API
- Fallback data prevents blocking errors

### Image Optimization
- Next.js Image component for YouTube thumbnails
- Remote patterns configured for `img.youtube.com`
- Placeholder images from `placehold.co`

### Static Export
- Zero server runtime required
- CDN-friendly distribution
- Fast global delivery via S3 + CloudFront potential

---

## Related Documentation
- [Architecture Overview](./ARCHITECTURE.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Project Index](./PROJECT_INDEX.md)
- [Claude Code Guide](../CLAUDE.md)

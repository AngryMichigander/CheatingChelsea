# Architecture Overview

This document provides a comprehensive architectural overview of the cheatingchelsea Next.js application.

## Table of Contents
- [System Architecture](#system-architecture)
- [Technology Stack](#technology-stack)
- [Directory Structure](#directory-structure)
- [Data Flow](#data-flow)
- [Component Architecture](#component-architecture)
- [Deployment Architecture](#deployment-architecture)
- [Design Patterns](#design-patterns)

---

## System Architecture

### Application Type
**Static Export Next.js Application** with server-side data fetching at build time.

### Key Characteristics
- **Rendering**: Static Site Generation (SSG) with `output: 'export'`
- **Hosting**: AWS S3 static website hosting
- **Data Fetching**: Server components with build-time fetch + 1-hour revalidation
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Type Safety**: TypeScript with strict mode

### Architecture Diagram
```
┌─────────────────────────────────────────────────────────────┐
│                      Build Process                          │
│  ┌──────────┐    ┌──────────┐    ┌──────────────┐         │
│  │ Git Hash │───▶│ Next.js  │───▶│ Static Files │         │
│  │ Injection│    │  Build   │    │    (out/)    │         │
│  └──────────┘    └────┬─────┘    └──────┬───────┘         │
│                       │                   │                 │
│                  ┌────▼─────┐       ┌────▼────┐           │
│                  │ YouTube  │       │   S3    │           │
│                  │ API Fetch│       │ Deploy  │           │
│                  └──────────┘       └─────────┘           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     Runtime (Static)                        │
│  ┌──────────┐    ┌──────────┐    ┌──────────────┐         │
│  │   User   │───▶│ S3/CDN   │───▶│ Static HTML  │         │
│  │ Browser  │◀───│ Delivery │◀───│  + Assets    │         │
│  └──────────┘    └──────────┘    └──────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Core Framework
- **Next.js 15.3.3**: App Router with static export
- **React 18.3.1**: Server and client components
- **TypeScript 5.8.3**: Type-safe development

### UI & Styling
- **Tailwind CSS 3.4.1**: Utility-first styling
- **shadcn/ui**: 30+ Radix UI-based components
- **lucide-react**: Icon library
- **next-themes**: Dark/light mode support

### Build & Development
- **Turbopack**: Fast development builds
- **ESBuild**: Production bundling
- **Husky**: Git hooks for pre-commit checks
- **patch-package**: Dependency patching

### AI Integration (Minimal)
- **Genkit 1.13.0**: AI flow orchestration
- **@genkit-ai/googleai**: Google Gemini 2.0 Flash integration

### Deployment
- **AWS CLI**: S3 bucket management
- **dotenv-cli**: Environment variable management
- **Node scripts**: Custom build and deploy automation

---

## Directory Structure

```
cheatingchelsea/
├── src/                        # Source code
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── not-found.tsx      # 404 page
│   │   ├── gallery/           # Video gallery page
│   │   │   └── page.tsx
│   │   ├── dadvocate/         # Curated videos page
│   │   │   └── page.tsx
│   │   ├── long-story/        # Story page
│   │   │   └── page.tsx
│   │   ├── globals.css        # Global styles
│   │   ├── robots.ts          # Robots.txt generation
│   │   └── sitemap.ts         # Sitemap generation
│   │
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components (30+)
│   │   ├── Footer.tsx        # Site footer
│   │   └── theme-provider.tsx # Theme context
│   │
│   ├── lib/                   # Utilities
│   │   ├── utils.ts          # Class name merging (cn)
│   │   └── config.ts         # Environment config
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-mobile.tsx    # Mobile detection
│   │   └── use-toast.ts      # Toast notifications
│   │
│   └── ai/                    # AI integration (minimal)
│       ├── genkit.ts         # Genkit setup
│       └── dev.ts            # Development server
│
├── scripts/                   # Build & deploy scripts
│   ├── set-git-commit.js     # Git hash injection
│   └── create-s3-bucket.js   # S3 setup automation
│
├── public/                    # Static assets
│   └── 404-cat.jpg           # 404 page image
│
├── docs/                      # Documentation
│   ├── API_REFERENCE.md      # API documentation
│   ├── ARCHITECTURE.md       # This file
│   ├── DEPLOYMENT.md         # Deployment guide
│   └── blueprint.md          # Original blueprint
│
├── .serena/                   # Serena MCP memories
│   └── memories/
│
├── .forgejo/                  # CI/CD workflows
│   └── workflows/
│       ├── ci.yml            # Continuous integration
│       └── deploy.yml        # Deployment automation
│
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── components.json           # shadcn/ui configuration
├── package.json              # Dependencies
├── CLAUDE.md                 # Claude Code guide
└── README.md                 # Project readme
```

### Directory Responsibilities

#### `/src/app/`
**Responsibility**: Next.js App Router pages with Server Components

**Pattern**: File-system based routing
- `page.tsx`: Route component
- `layout.tsx`: Shared layout
- `not-found.tsx`: Error handling

**Key Files**:
- `page.tsx:1`: Homepage (Home component)
- `layout.tsx:1`: Root layout with theme provider
- `gallery/page.tsx:73`: YouTube API integration
- `dadvocate/page.tsx:1`: Curated video display

#### `/src/components/`
**Responsibility**: Reusable React components

**Structure**:
- `ui/`: shadcn/ui components (30+ files)
- Root level: Custom components (Footer, theme-provider)

**Pattern**: Component composition with Radix UI primitives

#### `/src/lib/`
**Responsibility**: Shared utilities and configuration

**Key Files**:
- `utils.ts`: `cn()` class name utility
- `config.ts`: Environment variable access

#### `/scripts/`
**Responsibility**: Build automation and deployment

**Key Scripts**:
- `set-git-commit.js`: Inject git hash into `.env.local`
- `create-s3-bucket.js`: Interactive S3 setup

---

## Data Flow

### Build-Time Data Flow

```
┌─────────────────┐
│  Git Repository │
└────────┬────────┘
         │
         │ 1. Git commit hash extraction
         ▼
┌─────────────────┐
│ set-git-commit  │───▶ .env.local (NEXT_PUBLIC_GIT_COMMIT)
└─────────────────┘
         │
         │ 2. Next.js build starts
         ▼
┌─────────────────┐
│  Server Build   │
│  (page.tsx)     │
└────────┬────────┘
         │
         │ 3. YouTube API calls (with fallback)
         ▼
┌─────────────────┐
│ YouTube API v3  │
│ (1hr cache)     │
└────────┬────────┘
         │
         │ 4. Static HTML generation
         ▼
┌─────────────────┐
│   out/ folder   │───▶ Static files ready for S3
└─────────────────┘
```

### Runtime Data Flow (Static)

```
User Request
     │
     ▼
┌─────────────────┐
│  S3/CloudFront  │
│   Static Host   │
└────────┬────────┘
         │
         │ Serve pre-rendered HTML/CSS/JS
         ▼
┌─────────────────┐
│ User Browser    │
│ (Hydration)     │
└────────┬────────┘
         │
         │ Client-side navigation (no server calls)
         ▼
┌─────────────────┐
│  React Router   │
│ (Client-side)   │
└─────────────────┘
```

---

## Component Architecture

### Component Hierarchy

```
RootLayout (layout.tsx)
├── ThemeProvider (theme-provider.tsx)
│   ├── Home (page.tsx)
│   ├── GalleryPage (gallery/page.tsx)
│   │   └── YouTube Embeds
│   ├── DadvocatePage (dadvocate/page.tsx)
│   │   └── YouTube Embeds
│   ├── LongStoryPage (long-story/page.tsx)
│   └── NotFound (not-found.tsx)
├── Footer (Footer.tsx)
└── Toaster (components/ui/toaster.tsx)
```

### Component Patterns

#### Server Components (Default)
**Location**: `src/app/**/*.tsx`

**Characteristics**:
- Async functions allowed
- Direct environment variable access
- No React hooks
- Build-time data fetching

**Example**: `src/app/gallery/page.tsx:122`

#### Client Components (Explicit)
**Location**: `src/components/ui/**/*.tsx`, `src/components/theme-provider.tsx`

**Markers**: `'use client'` directive

**Characteristics**:
- React hooks enabled
- Browser API access
- Interactive event handlers

**Example**: `src/components/theme-provider.tsx`

### shadcn/ui Component Library

**Count**: 30+ components

**Key Components**:
- Form controls: Button, Input, Textarea, Select, Checkbox, Radio
- Layout: Card, Separator, Tabs, Accordion, Collapsible
- Overlays: Dialog, Alert Dialog, Popover, Tooltip, Sheet
- Feedback: Toast, Alert, Progress, Skeleton
- Navigation: Dropdown Menu, Menubar
- Data: Table, Calendar, Chart, Carousel

**Pattern**: Radix UI primitives + Tailwind styling + TypeScript

**Configuration**: `components.json`

---

## Deployment Architecture

### Build Process

```bash
npm run build
    │
    ├─▶ scripts/set-git-commit.js   # Git hash → .env.local
    │
    └─▶ next build                   # Static export
         │
         ├─▶ TypeScript compilation (errors ignored)
         ├─▶ ESLint checks (errors ignored)
         ├─▶ Server component rendering
         ├─▶ YouTube API calls (with cache)
         └─▶ Static file generation → out/
```

### Deployment Options

#### 1. AWS S3 (Primary)
```bash
npm run deploy:s3
```

**Process**:
1. Build static files
2. Sync to S3 bucket with `--delete` flag
3. Serve via S3 website hosting

**Configuration**:
- Bucket policy: Public read access
- Website hosting: index.html / error.html
- CORS: Not required (same-origin static)

**Setup**:
```bash
npm run create-s3-bucket  # Interactive setup
```

#### 2. Manual Static Hosting
**Output**: `out/` directory

**Compatible Hosts**:
- Netlify
- Vercel (via static export)
- GitHub Pages
- Any CDN/static host

### CI/CD Workflows

**Location**: `.forgejo/workflows/`

#### `ci.yml`: Continuous Integration
- Runs on push/PR to main
- Steps: Install → Typecheck → Lint → Build
- Concurrency control: Cancel previous runs

#### `deploy.yml`: Deployment Automation
- Trigger conditions TBD
- Automated S3 deployment

---

## Design Patterns

### 1. Static Export Pattern
**Problem**: Need fast, globally distributed site without server costs

**Solution**: Static HTML generation at build time

**Implementation**:
```typescript
// next.config.ts
export default {
  output: 'export',
  trailingSlash: true,
};
```

**Trade-offs**:
- ✅ Fast delivery, low cost, high scale
- ❌ Requires rebuild for content updates
- ❌ No dynamic server routes

### 2. Graceful Degradation Pattern
**Problem**: YouTube API may be unavailable or rate-limited

**Solution**: Fallback data with comprehensive error handling

**Implementation**: `src/app/gallery/page.tsx:73-120`

```typescript
async function getYouTubeVideos(ids: string[]): Promise<Video[]> {
  if (!apiKey) return fallbackData;
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) return fallbackData;
    // ... process data
  } catch {
    return fallbackData;
  }
}
```

**Benefits**:
- Never blocks build process
- Always displays content
- Logs issues for debugging

### 3. Path Alias Pattern
**Problem**: Messy relative imports (`../../../components`)

**Solution**: `@/` alias for `src/` directory

**Configuration**: `tsconfig.json:22-24`
```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

**Usage**:
```typescript
import { config } from '@/lib/config';
import { Footer } from '@/components/Footer';
```

### 4. Git Hash Injection Pattern
**Problem**: Track deployed version in production

**Solution**: Pre-build script injects commit hash

**Implementation**: `scripts/set-git-commit.js`

**Flow**:
1. `npm run build` → triggers script
2. Script executes `git rev-parse --short HEAD`
3. Writes to `.env.local` as `NEXT_PUBLIC_GIT_COMMIT`
4. Next.js includes in build
5. Displayed in footer

### 5. Component Library Integration Pattern
**Problem**: Need consistent, accessible UI components

**Solution**: shadcn/ui with copy-paste philosophy

**Benefits**:
- Full component ownership
- Easy customization
- No runtime dependency
- TypeScript native

**Configuration**: `components.json`

### 6. Theme Provider Pattern
**Problem**: Dark/light mode support with SSR

**Solution**: `next-themes` with client-side hydration

**Implementation**: `src/components/theme-provider.tsx`

**Features**:
- System preference detection
- Persistent user choice
- No flash on load

### 7. Error-Tolerant Build Pattern
**Problem**: TypeScript/ESLint errors block deployment

**Solution**: Ignore build errors (configured in `next.config.ts`)

```typescript
typescript: { ignoreBuildErrors: true },
eslint: { ignoreDuringBuilds: true },
```

**Trade-offs**:
- ✅ Deployment flexibility
- ❌ Potential runtime errors
- Mitigation: Separate `npm run typecheck` command

---

## Configuration Files

### `next.config.ts`
**Purpose**: Next.js framework configuration

**Key Settings**:
- `output: 'export'`: Static site generation
- `trailingSlash: true`: URL consistency
- `ignoreBuildErrors: true`: Deployment flexibility
- `images.remotePatterns`: YouTube thumbnails

### `tailwind.config.ts`
**Purpose**: Tailwind CSS customization

**Customizations**:
- Custom color palette
- Dark mode support
- Animation utilities
- shadcn/ui integration

### `tsconfig.json`
**Purpose**: TypeScript compiler configuration

**Key Settings**:
- `strict: true`: Type safety
- `paths`: Path aliases (`@/`)
- `target: ES2020`: Modern JavaScript
- `jsx: preserve`: Next.js JSX handling

### `components.json`
**Purpose**: shadcn/ui CLI configuration

**Settings**:
- Component path: `src/components/ui`
- Utils path: `src/lib/utils`
- Tailwind config path
- CSS variables for theming

---

## Performance Considerations

### Build Time
**Target**: <2 minutes

**Optimizations**:
- Turbopack for development
- Parallel TypeScript compilation
- Incremental builds

### Runtime Performance
**Target**: Lighthouse score >90

**Strategies**:
- Static HTML (no server latency)
- CDN delivery via S3
- Image optimization (Next.js Image)
- Code splitting by route

### Caching Strategy
- **YouTube API**: 1-hour revalidation
- **Static assets**: Forever (content-hashed)
- **HTML**: CDN cache (configurable)

---

## Security Considerations

### API Keys
- Server-side only (build time)
- Not exposed to client
- Fallback prevents exposure of errors

### S3 Configuration
- Public read access (static content only)
- No write permissions via bucket policy
- CORS not required (same-origin)

### Dependencies
- Regular updates via Dependabot
- Patch-package for critical fixes
- Minimal runtime dependencies (static export)

---

## Scalability

### Traffic Handling
**Capacity**: Effectively unlimited (S3 static)

**Scaling Factors**:
- S3 auto-scales
- CloudFront integration possible
- No server bottlenecks

### Content Updates
**Process**: Rebuild → Redeploy

**Frequency**: Manual or CI/CD triggered

**Optimization**: Could add CMS for content management

---

## Monitoring & Observability

### Current State
- **Logging**: Console logs during build
- **Monitoring**: None (static hosting)
- **Analytics**: Not configured

### Potential Additions
- CloudFront access logs
- Google Analytics / Plausible
- Error boundary for client errors
- Sentry for error tracking

---

## Related Documentation
- [API Reference](./API_REFERENCE.md) - Detailed API documentation
- [Deployment Guide](./DEPLOYMENT.md) - Step-by-step deployment
- [Claude Code Guide](../CLAUDE.md) - Development workflows
- [Project Index](./PROJECT_INDEX.md) - Complete file index

---

## Architectural Decisions

### Why Static Export?
**Decision**: Use `output: 'export'` instead of server-side rendering

**Rationale**:
- Content updates infrequent
- Global distribution priority
- Cost optimization (no server)
- Simplicity in deployment

**Trade-offs**: Accepted rebuild requirement for content changes

### Why S3 Over Vercel?
**Decision**: Primary deployment target is AWS S3

**Rationale**:
- Full control over infrastructure
- Explicit in project configuration
- Cost predictability
- Custom domain integration

**Alternative**: Vercel remains compatible via static export

### Why Ignore Build Errors?
**Decision**: Configure build to ignore TypeScript/ESLint errors

**Rationale**:
- Deployment flexibility during development
- Separate quality checks via `npm run typecheck`
- Pre-commit hooks catch issues early

**Mitigation**: Husky pre-commit hooks + CI checks

---

## Future Architectural Considerations

### Potential Enhancements
1. **CMS Integration**: Headless CMS for content management
2. **CloudFront**: CDN layer for improved global performance
3. **Edge Functions**: Cloudflare Workers for dynamic features
4. **Build Optimization**: Parallel YouTube API calls
5. **Error Tracking**: Sentry integration for client errors
6. **Analytics**: Privacy-focused analytics (Plausible/Fathom)

### Migration Paths
1. **SSR**: Switch to server-side rendering if dynamic needs arise
2. **ISR**: Incremental Static Regeneration for partial updates
3. **Multi-Region**: Deploy to multiple S3 buckets for latency reduction

# Project Index

Comprehensive knowledge base index for the cheatingchelsea Next.js application.

## Quick Navigation

### 📚 Documentation
- [Architecture Overview](./ARCHITECTURE.md) - System design and patterns
- [API Reference](./API_REFERENCE.md) - Detailed API documentation
- [Deployment Guide](./DEPLOYMENT.md) - Deployment workflows and troubleshooting
- [Claude Code Guide](../CLAUDE.md) - Development with Claude Code
- [README](../README.md) - Project overview

### 🗂️ Key Directories
- [`src/app/`](#srcapp) - Next.js App Router pages
- [`src/components/`](#srccomponents) - React components
- [`src/lib/`](#srclib) - Utilities and configuration
- [`scripts/`](#scripts) - Build and deployment automation
- [`docs/`](#docs) - Project documentation

### 🔑 Key Files
- [`next.config.ts`](#nextconfigts) - Next.js configuration
- [`package.json`](#packagejson) - Dependencies and scripts
- [`tailwind.config.ts`](#tailwindconfigts) - Tailwind CSS configuration
- [`tsconfig.json`](#tsconfigjson) - TypeScript configuration

---

## File Structure

### Root Directory

```
cheatingchelsea/
├── docs/                      # Project documentation
├── public/                    # Static assets
├── scripts/                   # Build automation
├── src/                       # Source code
├── .forgejo/                  # CI/CD workflows
├── .serena/                   # Serena MCP memories
├── .vscode/                   # VS Code settings
├── next.config.ts            # Next.js config
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind config
├── tsconfig.json             # TypeScript config
├── CLAUDE.md                 # Claude Code guide
└── README.md                 # Project readme
```

---

## `src/app/`

Next.js App Router pages and layouts.

### Structure
```
src/app/
├── layout.tsx                # Root layout
├── page.tsx                  # Homepage
├── not-found.tsx            # 404 page
├── globals.css              # Global styles
├── robots.ts                # Robots.txt generation
├── sitemap.ts               # Sitemap generation
├── gallery/                 # Video gallery
│   └── page.tsx
├── dadvocate/               # Curated videos
│   └── page.tsx
└── long-story/              # Story page
    └── page.tsx
```

### Key Files

#### `layout.tsx`
**Purpose**: Root layout wrapping all pages

**Exports**:
- `RootLayout` (Function Component): Root layout with theme provider
- `metadata` (Constant): Global site metadata
- `inter` (Constant): Inter font configuration

**Features**:
- Theme provider integration (dark/light mode)
- Footer inclusion
- Global styles application
- Font optimization

**Location**: src/app/layout.tsx

---

#### `page.tsx`
**Purpose**: Homepage component

**Exports**:
- `Home` (Function Component): Homepage with project intro
- `metadata` (Constant): SEO metadata

**Features**:
- Hero section with description
- Navigation cards to gallery/dadvocate
- GoFundMe campaign integration
- Responsive layout

**Location**: src/app/page.tsx

---

#### `not-found.tsx`
**Purpose**: Custom 404 error page

**Features**:
- Cat image (404-cat.jpg)
- Navigation back to home
- Branded styling

**Location**: src/app/not-found.tsx

---

#### `gallery/page.tsx`
**Purpose**: YouTube video gallery

**Exports**:
- `GalleryPage` (Function Component): Server component for gallery
- `getYouTubeVideos` (Function): YouTube API integration
- `Video` (Interface): Video data type
- `videoIds` (Constant): Video ID list
- `fallbackData` (Constant): Hardcoded video data
- `metadata` (Constant): SEO metadata

**Features**:
- Server-side YouTube API fetching
- 1-hour cache (`revalidate: 3600`)
- Fallback to hardcoded data on API failure
- Responsive grid (1-3 columns)
- YouTube embed integration

**API Integration**: src/app/gallery/page.tsx:73

---

#### `dadvocate/page.tsx`
**Purpose**: Curated "dadvocate" videos

**Structure**: Similar to gallery/page.tsx

**Exports**:
- `DadvocatePage` (Function Component)
- `getYouTubeVideos` (Function)
- `Video` (Interface)
- `videoIds` (Constant)
- `fallbackData` (Constant)
- `metadata` (Constant)

**Location**: src/app/dadvocate/page.tsx

---

#### `long-story/page.tsx`
**Purpose**: Project story page

**Location**: src/app/long-story/page.tsx

---

#### `globals.css`
**Purpose**: Global CSS styles

**Includes**:
- Tailwind directives
- CSS custom properties for theming
- Base styles

**Location**: src/app/globals.css

---

#### `robots.ts`
**Purpose**: Generate robots.txt

**Type**: Dynamic route handler

**Location**: src/app/robots.ts

---

#### `sitemap.ts`
**Purpose**: Generate sitemap.xml

**Type**: Dynamic route handler

**Location**: src/app/sitemap.ts

---

## `src/components/`

React components library.

### Structure
```
src/components/
├── ui/                       # shadcn/ui components (30+)
│   ├── accordion.tsx
│   ├── alert-dialog.tsx
│   ├── alert.tsx
│   ├── avatar.tsx
│   ├── badge.tsx
│   ├── button.tsx
│   ├── calendar.tsx
│   ├── card.tsx
│   ├── carousel.tsx
│   ├── chart.tsx
│   ├── checkbox.tsx
│   ├── collapsible.tsx
│   ├── dialog.tsx
│   ├── dropdown-menu.tsx
│   ├── form.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── menubar.tsx
│   ├── popover.tsx
│   ├── progress.tsx
│   ├── radio-group.tsx
│   ├── scroll-area.tsx
│   ├── select.tsx
│   ├── separator.tsx
│   ├── sheet.tsx
│   ├── sidebar.tsx
│   ├── skeleton.tsx
│   ├── slider.tsx
│   ├── switch.tsx
│   ├── table.tsx
│   ├── tabs.tsx
│   ├── textarea.tsx
│   ├── toast.tsx
│   ├── toaster.tsx
│   └── tooltip.tsx
├── Footer.tsx               # Site footer
└── theme-provider.tsx       # Theme context
```

### Key Components

#### `Footer.tsx`
**Purpose**: Site footer with git commit hash

**Exports**:
- `Footer` (Function Component)

**Features**:
- Displays project info
- Shows git commit hash (from `NEXT_PUBLIC_GIT_COMMIT`)
- Responsive layout

**Location**: src/components/Footer.tsx

---

#### `theme-provider.tsx`
**Purpose**: Theme context provider

**Marker**: `'use client'` (Client Component)

**Features**:
- next-themes integration
- System preference detection
- Persistent user choice
- No flash on load

**Location**: src/components/theme-provider.tsx

---

#### `ui/` Components
**Purpose**: shadcn/ui component library

**Count**: 30+ components

**Pattern**: Radix UI primitives + Tailwind styling

**Categories**:
- **Form Controls**: Button, Input, Textarea, Select, Checkbox, Radio
- **Layout**: Card, Separator, Tabs, Accordion, Collapsible
- **Overlays**: Dialog, Alert Dialog, Popover, Tooltip, Sheet
- **Feedback**: Toast, Alert, Progress, Skeleton
- **Navigation**: Dropdown Menu, Menubar, Sidebar
- **Data**: Table, Calendar, Chart, Carousel

**Configuration**: components.json

**Location**: src/components/ui/

---

## `src/lib/`

Shared utilities and configuration.

### Structure
```
src/lib/
├── utils.ts                 # Utilities
└── config.ts                # Configuration
```

### Key Files

#### `utils.ts`
**Purpose**: Utility functions

**Exports**:
- `cn` (Function): Class name merging with conflict resolution

**Implementation**:
```typescript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Usage**:
```typescript
cn('px-2 py-1', 'px-4') // Returns: 'py-1 px-4'
```

**Location**: src/lib/utils.ts

---

#### `config.ts`
**Purpose**: Environment configuration

**Exports**:
- `config` (Constant): Configuration object
- `isServer` (Constant): Server-side check

**Implementation**:
```typescript
export const config = {
  youtubeApiKey: process.env.YOUTUBE_API_KEY ||
                 process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '',
};
```

**Location**: src/lib/config.ts:1

---

## `src/hooks/`

Custom React hooks.

### Structure
```
src/hooks/
├── use-mobile.tsx           # Mobile detection
└── use-toast.ts             # Toast notifications
```

### Key Hooks

#### `use-mobile.tsx`
**Purpose**: Mobile viewport detection

**Location**: src/hooks/use-mobile.tsx

---

#### `use-toast.ts`
**Purpose**: Toast notification management

**Location**: src/hooks/use-toast.ts

---

## `src/ai/`

AI integration (minimal implementation).

### Structure
```
src/ai/
├── genkit.ts                # Genkit setup
└── dev.ts                   # Development server
```

### Key Files

#### `genkit.ts`
**Purpose**: Genkit configuration

**Integration**: Google Gemini 2.0 Flash

**Location**: src/ai/genkit.ts

---

#### `dev.ts`
**Purpose**: Genkit development server

**Location**: src/ai/dev.ts

---

## `scripts/`

Build and deployment automation.

### Structure
```
scripts/
├── set-git-commit.js        # Git hash injection
└── create-s3-bucket.js      # S3 setup
```

### Key Scripts

#### `set-git-commit.js`
**Purpose**: Inject git commit hash into build

**Process**:
1. Executes `git rev-parse --short HEAD`
2. Reads existing `.env.local`
3. Removes previous `NEXT_PUBLIC_GIT_COMMIT` line
4. Appends new commit hash
5. Writes to `.env.local`

**Usage**: Automatically runs during `npm run build`

**Location**: scripts/set-git-commit.js

**Referenced In**: package.json:9

---

#### `create-s3-bucket.js`
**Purpose**: Interactive S3 bucket setup

**Features**:
- Prompts for bucket name and region
- Creates S3 bucket via AWS CLI
- Enables static website hosting
- Configures public read policy
- Disables public access blocks
- Provides deployment instructions

**Usage**:
```bash
npm run create-s3-bucket
```

**Location**: scripts/create-s3-bucket.js

**Referenced In**: package.json:15

---

## `docs/`

Project documentation.

### Structure
```
docs/
├── API_REFERENCE.md         # API documentation
├── ARCHITECTURE.md          # Architecture overview
├── DEPLOYMENT.md            # Deployment guide
├── PROJECT_INDEX.md         # This file
└── blueprint.md             # Original blueprint
```

### Documentation Files

#### `API_REFERENCE.md`
**Purpose**: Comprehensive API documentation

**Sections**:
- Configuration
- YouTube Integration
- Page Components
- Utilities
- Environment Variables
- Build Scripts
- Type Definitions
- Caching Strategy
- Error Handling

**Location**: docs/API_REFERENCE.md

---

#### `ARCHITECTURE.md`
**Purpose**: System architecture documentation

**Sections**:
- System Architecture
- Technology Stack
- Directory Structure
- Data Flow
- Component Architecture
- Deployment Architecture
- Design Patterns
- Performance Considerations
- Security
- Scalability

**Location**: docs/ARCHITECTURE.md

---

#### `DEPLOYMENT.md`
**Purpose**: Deployment guide and troubleshooting

**Sections**:
- Prerequisites
- Environment Setup
- Local Development
- Build Process
- Deployment Options (S3, Netlify, Vercel, GitHub Pages, Custom)
- CI/CD Workflows
- Troubleshooting
- Rollback Procedures
- Cost Estimation

**Location**: docs/DEPLOYMENT.md

---

#### `PROJECT_INDEX.md`
**Purpose**: This file - complete project index

**Location**: docs/PROJECT_INDEX.md

---

#### `blueprint.md`
**Purpose**: Original project blueprint

**Location**: docs/blueprint.md

---

## `.forgejo/workflows/`

CI/CD workflow definitions.

### Structure
```
.forgejo/workflows/
├── ci.yml                   # Continuous integration
└── deploy.yml               # Deployment automation
```

### Workflow Files

#### `ci.yml`
**Purpose**: Continuous integration workflow

**Triggers**:
- Push to `main`, `master`, `feature/*`
- Pull requests to `main`, `master`

**Jobs**:
1. Checkout code
2. Install dependencies (optimized)
3. Lint and typecheck (parallel)
4. Build application

**Optimizations**:
- `npm ci --prefer-offline --no-audit --no-fund`
- `NODE_OPTIONS: '--max-old-space-size=4096'`
- `UV_THREADPOOL_SIZE: 16`
- Parallel lint/typecheck

**Concurrency**: Cancels previous runs

**Location**: .forgejo/workflows/ci.yml

**Referenced In**: [DEPLOYMENT.md](./DEPLOYMENT.md#ci-workflow)

---

#### `deploy.yml`
**Purpose**: Deployment workflow

**Triggers**:
- Push to `main`, `master`
- Manual (`workflow_dispatch`)

**Jobs**:
1. Checkout code
2. Install dependencies
3. Build with YouTube API key
4. Conditional S3 deployment

**Required Secrets**:
- `YOUTUBE_API_KEY`
- `S3_BUCKET_NAME`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`

**Location**: .forgejo/workflows/deploy.yml

**Referenced In**: [DEPLOYMENT.md](./DEPLOYMENT.md#deployment-workflow)

---

## `.serena/`

Serena MCP session memories.

### Structure
```
.serena/
├── memories/
│   ├── code_style_conventions.md
│   ├── suggested_commands.md
│   ├── project_overview.md
│   └── task_completion_checklist.md
├── project.yml
└── .gitignore
```

### Memory Files

#### `code_style_conventions.md`
**Purpose**: Code style and formatting guidelines

**Location**: .serena/memories/code_style_conventions.md

---

#### `suggested_commands.md`
**Purpose**: Common workflow commands

**Location**: .serena/memories/suggested_commands.md

---

#### `project_overview.md`
**Purpose**: Project architecture and structure

**Location**: .serena/memories/project_overview.md

---

#### `task_completion_checklist.md`
**Purpose**: Quality gates and validation steps

**Location**: .serena/memories/task_completion_checklist.md

---

## Configuration Files

### `next.config.ts`
**Purpose**: Next.js framework configuration

**Key Settings**:
```typescript
{
  output: 'export',              // Static export
  trailingSlash: true,           // URL consistency
  typescript: {
    ignoreBuildErrors: true,     // Deployment flexibility
  },
  eslint: {
    ignoreDuringBuilds: true,    // Deployment flexibility
  },
  images: {
    remotePatterns: [
      { hostname: 'placehold.co' },
      { hostname: 'img.youtube.com' },
    ],
  },
}
```

**Location**: next.config.ts

**Referenced In**: [ARCHITECTURE.md](./ARCHITECTURE.md#build--deployment-details)

---

### `package.json`
**Purpose**: Project metadata and dependencies

**Key Scripts**:
- `dev`: Development server (port 9002, Turbopack)
- `build`: Build with git hash injection
- `build:static`: Standard Next.js build
- `start`: Production server
- `lint`: ESLint
- `typecheck`: TypeScript checking
- `deploy:s3`: Deploy to AWS S3
- `create-s3-bucket`: S3 setup automation
- `genkit:dev`: AI development server
- `genkit:watch`: AI dev with watching

**Dependencies**: 60 total
- **Core**: Next.js 15.3.3, React 18.3.1, TypeScript 5.8.3
- **UI**: shadcn/ui (30+ Radix components), Tailwind CSS 3.4.1
- **AI**: Genkit 1.13.0, Google AI integration

**Location**: package.json

**Referenced In**: [API_REFERENCE.md](./API_REFERENCE.md#build-scripts)

---

### `tailwind.config.ts`
**Purpose**: Tailwind CSS configuration

**Customizations**:
- Custom color palette
- Dark mode support (`class` strategy)
- Animation utilities
- shadcn/ui integration
- CSS variables for theming

**Location**: tailwind.config.ts

**Referenced In**: [ARCHITECTURE.md](./ARCHITECTURE.md#ui--styling)

---

### `tsconfig.json`
**Purpose**: TypeScript compiler configuration

**Key Settings**:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Location**: tsconfig.json

**Referenced In**: [ARCHITECTURE.md](./ARCHITECTURE.md#path-alias-pattern)

---

### `components.json`
**Purpose**: shadcn/ui CLI configuration

**Settings**:
- Component path: `src/components/ui`
- Utils path: `src/lib/utils`
- Tailwind config path
- CSS variables for theming
- Aliases: `@/` for `src/`

**Location**: components.json

**Referenced In**: [ARCHITECTURE.md](./ARCHITECTURE.md#component-library-integration-pattern)

---

### `.eslintrc.json`
**Purpose**: ESLint configuration

**Extends**: `next/core-web-vitals`

**Location**: .eslintrc.json

---

### `postcss.config.mjs`
**Purpose**: PostCSS configuration

**Plugins**: Tailwind CSS, Autoprefixer

**Location**: postcss.config.mjs

---

## `public/`

Static assets served directly.

### Structure
```
public/
└── 404-cat.jpg              # 404 page image
```

**Location**: public/

---

## `.vscode/`

VS Code workspace settings.

### Structure
```
.vscode/
└── settings.json
```

**Location**: .vscode/settings.json

---

## Root Configuration Files

### `.gitignore`
**Purpose**: Git ignore patterns

**Key Ignores**:
- `node_modules/`
- `.next/`
- `out/`
- `.env*.local`
- `.serena/` (except project.yml and memories/)

**Location**: .gitignore

---

### `.nvmrc`
**Purpose**: Node version specification

**Version**: 20.x

**Location**: .nvmrc

---

### `.husky/`
**Purpose**: Git hooks configuration

**Structure**:
```
.husky/
└── pre-commit               # Pre-commit hook
```

**Hook**: Runs lint checks before commit

**Location**: .husky/pre-commit

---

### `CLAUDE.md`
**Purpose**: Claude Code development guide

**Sections**:
- Project Overview
- Essential Commands
- Architecture Overview
- Key Patterns
- Git Workflow & Pull Requests
- Code Style Guidelines

**Location**: CLAUDE.md

**Referenced In**: All documentation files

---

### `README.md`
**Purpose**: Project readme

**Sections**:
- Project overview
- Setup instructions
- Available scripts
- Deployment info

**Location**: README.md

---

## Cross-Reference Map

### By Topic

#### 🏗️ Architecture
- [System Architecture](./ARCHITECTURE.md#system-architecture)
- [Component Hierarchy](./ARCHITECTURE.md#component-hierarchy)
- [Data Flow](./ARCHITECTURE.md#data-flow)
- [Design Patterns](./ARCHITECTURE.md#design-patterns)

#### 📦 Deployment
- [AWS S3 Setup](./DEPLOYMENT.md#option-1-aws-s3-primary-method)
- [CI/CD Workflows](./DEPLOYMENT.md#cicd-workflows)
- [Troubleshooting](./DEPLOYMENT.md#troubleshooting)
- [Rollback Procedures](./DEPLOYMENT.md#rollback-procedures)

#### 🔌 API Integration
- [YouTube API](./API_REFERENCE.md#youtube-integration)
- [Configuration](./API_REFERENCE.md#configuration)
- [Environment Variables](./API_REFERENCE.md#environment-variables)
- [Error Handling](./API_REFERENCE.md#error-handling-patterns)

#### 🎨 UI Components
- [shadcn/ui Library](./ARCHITECTURE.md#shadcnui-component-library)
- [Theme Provider](./API_REFERENCE.md#page-components)
- [Component Patterns](./ARCHITECTURE.md#component-patterns)

#### 🔧 Development
- [Local Setup](./DEPLOYMENT.md#local-development)
- [Development Scripts](./DEPLOYMENT.md#development-scripts)
- [Claude Code Guide](../CLAUDE.md)

---

## Quick Reference

### Common Tasks

#### Add New Page
1. Create `src/app/new-page/page.tsx`
2. Export `metadata` for SEO
3. Update sitemap.ts
4. Rebuild: `npm run build`

#### Add UI Component
1. Check if shadcn/ui has it: [shadcn/ui](https://ui.shadcn.com)
2. Use existing from `src/components/ui/`
3. Or create custom in `src/components/`

#### Update Video Gallery
1. Edit `src/app/gallery/page.tsx`
2. Update `videoIds` constant
3. Update `fallbackData` with titles
4. Rebuild and redeploy

#### Deploy Changes
```bash
npm run build
npm run deploy:s3
```

#### Troubleshoot Build
```bash
npm run typecheck  # Check types
npm run lint       # Check linting
npm run build      # Full build
```

---

## Search Index

### Files by Function

#### **Configuration**
- `next.config.ts` - Next.js config
- `tailwind.config.ts` - Tailwind config
- `tsconfig.json` - TypeScript config
- `components.json` - shadcn/ui config
- `.eslintrc.json` - ESLint config
- `postcss.config.mjs` - PostCSS config

#### **Pages**
- `src/app/page.tsx` - Homepage
- `src/app/gallery/page.tsx` - Video gallery
- `src/app/dadvocate/page.tsx` - Curated videos
- `src/app/long-story/page.tsx` - Story page
- `src/app/not-found.tsx` - 404 page

#### **Components**
- `src/components/Footer.tsx` - Site footer
- `src/components/theme-provider.tsx` - Theme context
- `src/components/ui/*` - shadcn/ui components (30+)

#### **Utilities**
- `src/lib/utils.ts` - Class name utility
- `src/lib/config.ts` - Environment config

#### **Scripts**
- `scripts/set-git-commit.js` - Git hash injection
- `scripts/create-s3-bucket.js` - S3 setup

#### **Workflows**
- `.forgejo/workflows/ci.yml` - CI workflow
- `.forgejo/workflows/deploy.yml` - Deployment workflow

#### **Documentation**
- `docs/API_REFERENCE.md` - API docs
- `docs/ARCHITECTURE.md` - Architecture docs
- `docs/DEPLOYMENT.md` - Deployment guide
- `docs/PROJECT_INDEX.md` - This file
- `CLAUDE.md` - Claude Code guide

---

## External Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [YouTube Data API](https://developers.google.com/youtube/v3)
- [AWS S3 Static Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

### Tools & Services
- [Google Cloud Console](https://console.cloud.google.com) - YouTube API key
- [AWS Console](https://console.aws.amazon.com) - S3 management
- [Forgejo Docs](https://forgejo.org/docs) - CI/CD workflows

---

## Maintenance

### Regular Updates

#### Dependencies
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Update major versions (carefully)
npm install package@latest
```

#### Security
```bash
# Audit dependencies
npm audit

# Fix vulnerabilities
npm audit fix
```

#### Documentation
- Update API_REFERENCE.md when adding APIs
- Update ARCHITECTURE.md for major changes
- Update DEPLOYMENT.md for new deployment targets
- Update PROJECT_INDEX.md when restructuring

---

## Version History

**Current**: v0.1.0

**Major Changes**:
- Initial project setup
- Next.js 15.3.3 with App Router
- Static export configuration
- AWS S3 deployment support
- CI/CD workflows
- Comprehensive documentation

---

## Contact & Support

**Repository**: [Internal repository URL]

**Issues**: Report via repository issue tracker

**Documentation Updates**: Submit PRs to `docs/` directory

---

## License

See LICENSE file in repository root.

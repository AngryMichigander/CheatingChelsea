# Deployment Guide

Complete deployment documentation for the cheatingchelsea Next.js application.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Local Development](#local-development)
- [Build Process](#build-process)
- [Deployment Options](#deployment-options)
- [CI/CD Workflows](#cicd-workflows)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Software
- **Node.js**: v20.x or later (see `.nvmrc`)
- **npm**: 10.x or later
- **Git**: For version control and commit hash injection
- **AWS CLI**: For S3 deployment (optional)

### AWS Setup (for S3 deployment)
```bash
# Install AWS CLI
# macOS
brew install awscli

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Verify installation
aws --version

# Configure AWS credentials
aws configure
```

**Required AWS Permissions**:
- `s3:CreateBucket`
- `s3:PutObject`
- `s3:PutBucketPolicy`
- `s3:PutBucketWebsite`
- `s3:PutPublicAccessBlock`

---

## Environment Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd cheatingchelsea
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create `.env.local` file:
```bash
# Required for YouTube video metadata
YOUTUBE_API_KEY=your_youtube_api_key_here

# Optional for S3 deployment
S3_BUCKET_NAME=your-bucket-name

# Auto-generated during build (do not set manually)
# NEXT_PUBLIC_GIT_COMMIT=abc1234
```

#### Obtaining YouTube API Key

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable **YouTube Data API v3**
4. Create credentials → API key
5. (Optional) Restrict key to YouTube Data API v3
6. Copy API key to `.env.local`

---

## Local Development

### Start Development Server
```bash
npm run dev
```

**Access**: http://localhost:9002

**Features**:
- Turbopack for fast builds
- Hot module replacement
- Custom port 9002 (configured in `package.json`)

### Development Scripts

```bash
# Type checking (without emitting files)
npm run typecheck

# Linting
npm run lint

# AI development server (Genkit)
npm run genkit:dev

# AI development with file watching
npm run genkit:watch
```

---

## Build Process

### Standard Build
```bash
npm run build
```

**Process**:
1. **Git hash injection** (`scripts/set-git-commit.js`)
   - Executes `git rev-parse --short HEAD`
   - Writes `NEXT_PUBLIC_GIT_COMMIT` to `.env.local`
2. **Next.js build**
   - TypeScript compilation (errors ignored)
   - ESLint checks (errors ignored)
   - Server component rendering
   - YouTube API calls (with 1-hour cache)
   - Static file generation → `out/` directory

**Output**: `out/` directory with static HTML/CSS/JS

### Static-Only Build
```bash
npm run build:static
```

Skips git hash injection, runs `next build` only.

### Build Configuration

**next.config.ts**:
```typescript
{
  output: 'export',              // Static export
  trailingSlash: true,           // URL consistency
  skipTrailingSlashRedirect: true,
  typescript: {
    ignoreBuildErrors: true,     // Don't block on TS errors
  },
  eslint: {
    ignoreDuringBuilds: true,    // Don't block on ESLint errors
  },
}
```

---

## Deployment Options

### Option 1: AWS S3 (Primary Method)

#### Initial Setup

**Interactive Setup**:
```bash
npm run create-s3-bucket
```

**Prompts**:
1. Bucket name (must be globally unique)
2. AWS region (default: us-east-1)

**Actions**:
- Creates S3 bucket
- Enables static website hosting
- Configures public read policy
- Disables public access blocks
- Displays website URL

**Manual Setup**:
```bash
# Create bucket
aws s3 mb s3://your-bucket-name --region us-east-1

# Enable static website hosting
aws s3 website s3://your-bucket-name \
  --index-document index.html \
  --error-document error.html

# Create bucket policy (save as policy.json)
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}

# Apply bucket policy
aws s3api put-bucket-policy \
  --bucket your-bucket-name \
  --policy file://policy.json

# Disable public access blocks
aws s3api put-public-access-block \
  --bucket your-bucket-name \
  --public-access-block-configuration \
  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

#### Deployment

**Using npm script**:
```bash
# Set environment variable
export S3_BUCKET_NAME=your-bucket-name

# Or add to .env.local
echo "S3_BUCKET_NAME=your-bucket-name" >> .env.local

# Deploy
npm run deploy:s3
```

**Process**:
1. Runs `npm run build` (with git hash injection)
2. Syncs `out/` directory to S3
3. Uses `--delete` flag (removes old files)

**Manual deployment**:
```bash
# Build first
npm run build

# Deploy to S3
aws s3 sync out/ s3://your-bucket-name --delete
```

**Website URL**:
```
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

#### CloudFront Setup (Optional)

For HTTPS and better global performance:

```bash
# Create CloudFront distribution
aws cloudfront create-distribution \
  --origin-domain-name your-bucket-name.s3-website-us-east-1.amazonaws.com \
  --default-root-object index.html
```

**Benefits**:
- HTTPS support
- Custom domain (via Route 53)
- Edge caching
- Faster global delivery

---

### Option 2: Netlify

#### Setup

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Initialize site:
```bash
netlify init
```

4. Configure build settings:
- **Build command**: `npm run build`
- **Publish directory**: `out`

#### Deployment

**Manual**:
```bash
netlify deploy --prod
```

**Automatic** (via Git):
- Connect repository to Netlify
- Configure environment variables
- Auto-deploys on push to main

---

### Option 3: Vercel

Despite static export, Vercel remains compatible.

#### Setup

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

**Configuration**: Uses `next.config.ts` automatically

---

### Option 4: GitHub Pages

#### Setup

1. Build locally:
```bash
npm run build
```

2. Add `.nojekyll` file to `out/`:
```bash
touch out/.nojekyll
```

3. Push to `gh-pages` branch:
```bash
cd out
git init
git add -A
git commit -m "Deploy"
git push -f git@github.com:username/repo.git main:gh-pages
```

4. Enable GitHub Pages in repository settings

---

### Option 5: Custom Static Host

**Compatible with**:
- Any CDN (Cloudflare Pages, Fastly, etc.)
- Any web server (nginx, Apache, etc.)
- Docker containers with nginx

**Process**:
1. Run `npm run build`
2. Serve `out/` directory
3. Configure web server for trailing slashes

**nginx example**:
```nginx
server {
    listen 80;
    server_name example.com;
    root /path/to/out;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }
}
```

---

## CI/CD Workflows

Project uses Forgejo Actions (GitHub Actions compatible).

### CI Workflow

**File**: `.forgejo/workflows/ci.yml`

**Triggers**:
- Push to `main`, `master`, `feature/*` branches
- Pull requests to `main`, `master`

**Steps**:
1. Checkout code
2. Install dependencies with optimizations:
   - `npm ci --prefer-offline --no-audit --no-fund`
   - `NODE_OPTIONS: '--max-old-space-size=4096'`
   - `UV_THREADPOOL_SIZE: 16`
3. Run lint and typecheck in parallel:
   ```bash
   npm run lint &
   npm run typecheck &
   wait
   ```
4. Build application with empty `YOUTUBE_API_KEY`

**Concurrency**:
- Cancels previous runs on new push
- Group: `${{ github.workflow }}-${{ github.ref }}`

**Self-Hosted Runner**: Configured for `runs-on: self-hosted`

---

### Deployment Workflow

**File**: `.forgejo/workflows/deploy.yml`

**Triggers**:
- Push to `main`, `master` branches
- Manual trigger via `workflow_dispatch`

**Steps**:
1. Checkout code
2. Install dependencies (same optimizations as CI)
3. Build with YouTube API key from secrets
4. Conditional S3 deployment:
   - Checks for `AWS_ACCESS_KEY_ID` secret
   - Runs `npm run deploy:s3` if configured
   - Skips with message if not configured

**Required Secrets**:
- `YOUTUBE_API_KEY`: YouTube Data API v3 key
- `S3_BUCKET_NAME`: Target S3 bucket
- `AWS_ACCESS_KEY_ID`: AWS credentials
- `AWS_SECRET_ACCESS_KEY`: AWS credentials
- `AWS_REGION`: AWS region (e.g., us-east-1)

**Concurrency**: Same as CI workflow

---

### Configuring Secrets

**Forgejo**:
1. Repository Settings → Secrets
2. Add each required secret
3. Secrets are masked in logs

**GitHub**:
1. Repository Settings → Secrets and variables → Actions
2. Add repository secrets
3. Access via `${{ secrets.SECRET_NAME }}`

---

## Deployment Checklist

### Pre-Deployment

- [ ] Environment variables configured in `.env.local`
- [ ] YouTube API key tested locally
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes (or acceptable errors)
- [ ] `npm run build` succeeds
- [ ] Test production build locally:
  ```bash
  npm run build
  npx serve out
  ```

### AWS S3 Deployment

- [ ] AWS CLI installed and configured
- [ ] S3 bucket created (via script or manually)
- [ ] Bucket policy applied for public read
- [ ] Public access blocks disabled
- [ ] `S3_BUCKET_NAME` environment variable set
- [ ] Test deployment command:
  ```bash
  npm run deploy:s3
  ```
- [ ] Verify website URL works
- [ ] Test all pages (homepage, gallery, dadvocate, long-story)
- [ ] Test 404 page
- [ ] Verify git commit hash in footer

### CI/CD Setup

- [ ] Repository secrets configured
- [ ] CI workflow passing on main branch
- [ ] Deployment workflow tested (manual trigger)
- [ ] Self-hosted runner configured (if applicable)
- [ ] Concurrency controls working

---

## Monitoring Deployment

### Build Logs

**Local**:
```bash
npm run build 2>&1 | tee build.log
```

**CI/CD**: View logs in Forgejo Actions interface

### Deployment Verification

**Checklist**:
1. Homepage loads
2. Navigation works (gallery, dadvocate, long-story)
3. YouTube videos display
4. Dark/light mode toggle works
5. Footer shows correct git commit hash
6. 404 page displays for invalid routes

**Test Commands**:
```bash
# Check HTTP status
curl -I http://your-bucket-name.s3-website-us-east-1.amazonaws.com

# Test specific pages
curl http://your-bucket-name.s3-website-us-east-1.amazonaws.com/gallery/
curl http://your-bucket-name.s3-website-us-east-1.amazonaws.com/dadvocate/
```

---

## Troubleshooting

### Build Errors

#### "Git command not found"
**Issue**: `scripts/set-git-commit.js` fails

**Solution**:
```bash
# Install git
sudo apt-get install git  # Linux
brew install git           # macOS

# Or use static build
npm run build:static
```

#### "YouTube API quota exceeded"
**Issue**: YouTube API returns 403 error

**Solution**:
- Build uses fallback data (no error)
- Check quota: https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas
- Request quota increase if needed
- Or rely on fallback data in production

#### "Out of memory" during build
**Issue**: Node heap size exceeded

**Solution**:
```bash
# Increase heap size
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

Or update `package.json`:
```json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' node scripts/set-git-commit.js && next build"
  }
}
```

---

### Deployment Errors

#### "Bucket name already exists"
**Issue**: S3 bucket name not globally unique

**Solution**:
```bash
# Use unique name with timestamp or random suffix
npm run create-s3-bucket
# Enter: my-app-2024-abc123
```

#### "Access Denied" during S3 sync
**Issue**: AWS credentials lack permissions

**Solution**:
```bash
# Verify credentials
aws sts get-caller-identity

# Check IAM policy includes required S3 permissions
# See Prerequisites section for required permissions
```

#### "404 on subpages after deployment"
**Issue**: S3 website hosting doesn't handle trailing slashes

**Solution**:
- Next.js config already has `trailingSlash: true`
- Ensure URLs accessed with trailing slash: `/gallery/`
- Or use CloudFront with Lambda@Edge for redirect

#### "Website shows old version"
**Issue**: Browser/CDN cache

**Solution**:
```bash
# Clear browser cache
# Or use hard refresh: Ctrl+Shift+R (Linux/Windows) or Cmd+Shift+R (macOS)

# For CloudFront, create invalidation
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"
```

---

### CI/CD Errors

#### "Self-hosted runner not found"
**Issue**: Workflow configured for self-hosted runner

**Solution**:
- Set up self-hosted runner: https://docs.github.com/en/actions/hosting-your-own-runners
- Or change `runs-on: self-hosted` to `runs-on: ubuntu-latest` in workflow files

#### "Secret not found"
**Issue**: Required secrets not configured

**Solution**:
```bash
# Verify secrets configured in repository settings
# Required secrets listed in "Deployment Workflow" section above
```

#### "Workflow not triggered"
**Issue**: Push to branch doesn't trigger workflow

**Solution**:
- Verify branch name matches workflow triggers
- Check workflow file syntax (YAML validation)
- Ensure `.forgejo/workflows/` or `.github/workflows/` directory exists

---

## Performance Optimization

### Build Optimization

```bash
# Use npm ci for faster, deterministic installs
npm ci --prefer-offline --no-audit --no-fund

# Parallel lint and typecheck
npm run lint & npm run typecheck & wait

# Increase Node heap size for large projects
export NODE_OPTIONS="--max-old-space-size=4096"

# Use more UV threads for faster I/O
export UV_THREADPOOL_SIZE=16
```

### Deployment Optimization

**S3 + CloudFront**:
- Enable Gzip/Brotli compression
- Set long cache headers for assets
- Use CloudFront for edge caching

**Build Size**:
- Already optimized via static export
- Code splitting by route
- Image optimization via Next.js Image

---

## Rollback Procedures

### S3 Deployment Rollback

**Option 1: Versioning** (recommended)
```bash
# Enable versioning on bucket
aws s3api put-bucket-versioning \
  --bucket your-bucket-name \
  --versioning-configuration Status=Enabled

# List object versions
aws s3api list-object-versions \
  --bucket your-bucket-name \
  --prefix index.html

# Restore previous version
aws s3api copy-object \
  --bucket your-bucket-name \
  --copy-source your-bucket-name/index.html?versionId=VERSION_ID \
  --key index.html
```

**Option 2: Git Revert**
```bash
# Find previous working commit
git log --oneline

# Revert to previous commit
git checkout COMMIT_HASH

# Rebuild and redeploy
npm run build
npm run deploy:s3
```

**Option 3: Backup Restore**
```bash
# Create backup before deployment
aws s3 sync s3://your-bucket-name ./backup-$(date +%Y%m%d)

# Restore from backup
aws s3 sync ./backup-20240101 s3://your-bucket-name
```

---

## Security Best Practices

### Environment Variables
- Never commit `.env.local` to repository
- Use secrets management in CI/CD
- Rotate API keys periodically

### AWS Credentials
- Use IAM roles with least privilege
- Enable MFA for AWS account
- Rotate access keys regularly

### S3 Bucket
- Use bucket policy (not public ACLs)
- Enable access logging
- Consider CloudFront with OAI for better security

---

## Cost Estimation

### AWS S3 Costs
- **Storage**: ~$0.023/GB/month (first 50TB)
- **Requests**: ~$0.0004 per 1,000 GET requests
- **Data Transfer**: ~$0.09/GB (first 10TB)

**Example**: Small site with 100 visits/day
- Storage: <$0.01/month
- Requests: <$0.01/month
- Transfer: ~$0.27/month (assuming 1MB per visit)
- **Total**: ~$0.30/month

### CloudFront Addition
- Free tier: 1TB data transfer, 10M requests/month
- Beyond free tier: ~$0.085/GB
- **For small sites**: Often stays within free tier

---

## Related Documentation
- [Architecture Overview](./ARCHITECTURE.md) - System architecture
- [API Reference](./API_REFERENCE.md) - API documentation
- [Claude Code Guide](../CLAUDE.md) - Development workflows
- [Project Index](./PROJECT_INDEX.md) - Complete file index

---

## Support Resources

### External Documentation
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [AWS S3 Static Website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [YouTube Data API](https://developers.google.com/youtube/v3)
- [Forgejo Actions](https://forgejo.org/docs/latest/user/actions/)

### Repository Issues
Report deployment issues via repository issue tracker.

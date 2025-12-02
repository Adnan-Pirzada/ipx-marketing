# Deployment Guide

## Overview

This guide covers deploying the Infini Pro X marketing platform to production using Vercel, the recommended hosting platform for Next.js applications.

## Prerequisites

- Node.js 18+ installed locally
- Git repository access
- Vercel account (free tier available)
- Google Gemini API key
- Domain name (optional, Vercel provides free subdomain)

## Environment Variables

### Required Variables

Create `.env.local` for local development and configure these in Vercel for production:

```bash
# AI Integration
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-1.5-pro

# Optional: Rate Limiting
GEMINI_MAX_REQUESTS_PER_MINUTE=60
GEMINI_TIMEOUT_MS=30000

# Analytics (Optional - Future)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Security
NEXT_PUBLIC_SITE_URL=https://www.infiniprox.com
```

### Setting Environment Variables

#### Local Development
```bash
# Copy example environment file
cp .env.example .env.local

# Edit with your values
nano .env.local
```

#### Vercel Dashboard
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add each variable
4. Select appropriate environments (Production/Preview/Development)

## Deployment Options

### Option 1: Vercel (Recommended)

#### Initial Setup

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
# First deployment
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? infini-prox-marketing
# - Directory? ./
# - Override settings? No
```

4. **Deploy to Production**:
```bash
vercel --prod
```

#### Continuous Deployment

**Automatic Deployment from Git**:

1. Visit [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave default)
4. Add environment variables
5. Click "Deploy"

**Deployment Triggers**:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment
- Pull requests → Preview deployment with unique URL

#### Custom Domain Setup

1. **Add Domain in Vercel**:
   - Go to Project Settings → Domains
   - Add `www.infiniprox.com` and `infiniprox.com`

2. **Configure DNS**:

**Option A: Vercel Nameservers** (Recommended):
```
Update your domain registrar with Vercel's nameservers:
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: Custom DNS**:
```
Type: A Record
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

3. **SSL Certificate**:
   - Automatically provisioned by Vercel
   - HTTPS enforced by default

### Option 2: Self-Hosted (Alternative)

#### Build for Production

```bash
# Install dependencies
npm ci

# Build application
npm run build

# Test production build locally
npm start
```

#### Deploy to Ubuntu/Debian Server

1. **Install Node.js**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Install PM2**:
```bash
sudo npm install -g pm2
```

3. **Clone and Setup**:
```bash
# Clone repository
git clone https://github.com/Adnan-Pirzada/ipx-marketing.git
cd ipx-marketing

# Install dependencies
npm ci

# Create .env.local
nano .env.local
# Add your environment variables

# Build
npm run build
```

4. **Start with PM2**:
```bash
# Start application
pm2 start npm --name "infini-prox" -- start

# Configure auto-restart on system reboot
pm2 startup
pm2 save
```

5. **Configure Nginx**:
```nginx
server {
    listen 80;
    server_name www.infiniprox.com infiniprox.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **SSL with Let's Encrypt**:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d infiniprox.com -d www.infiniprox.com
```

## Build Optimization

### Production Build Configuration

Edit `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Image optimization
  images: {
    domains: ['www.infiniprox.com'],
    formats: ['image/webp', 'image/avif'],
  },

  // Compression
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

### Performance Optimizations

1. **Enable SWC Minification** (default in Next.js 14+)
2. **Image Optimization**: Use Next.js Image component
3. **Font Optimization**: Use next/font
4. **Bundle Analysis**:

```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# Update next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

## Monitoring & Analytics

### Vercel Analytics

1. **Enable in Vercel Dashboard**:
   - Go to Project → Analytics
   - Enable Web Analytics
   - Install package:

```bash
npm install @vercel/analytics
```

2. **Add to Application**:

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics (Optional)

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
```

## CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run type check
        run: npm run type-check

      - name: Build
        run: npm run build
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Database Setup (Future)

### When Adding Database

**Recommended: Vercel Postgres**

```bash
# Install
npm install @vercel/postgres

# Usage
import { sql } from '@vercel/postgres';

export async function getLeads() {
  const { rows } = await sql`SELECT * FROM leads`;
  return rows;
}
```

**Alternative: Supabase**

```bash
npm install @supabase/supabase-js
```

## Backup & Recovery

### Automated Backups

**Git Repository**: Primary backup
- All code versioned
- Environment variables documented
- Infrastructure as code

**Database Backups** (when implemented):
- Daily automated backups
- 30-day retention
- Point-in-time recovery

## Security Checklist

- [ ] Environment variables secured (not committed to Git)
- [ ] API keys rotated regularly
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Rate limiting implemented
- [ ] Input validation on all forms
- [ ] CORS properly configured
- [ ] Dependencies regularly updated
- [ ] Secret scanning enabled in GitHub

## Performance Checklist

- [ ] Images optimized (WebP/AVIF)
- [ ] Fonts optimized (next/font)
- [ ] JavaScript minified
- [ ] CSS purged (unused removed)
- [ ] Caching headers configured
- [ ] CDN enabled (Vercel Edge Network)
- [ ] Core Web Vitals targets met:
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

## Troubleshooting

### Common Issues

**1. Build Fails**

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**2. Environment Variables Not Working**

- Verify variables in Vercel dashboard
- Ensure `NEXT_PUBLIC_` prefix for client-side variables
- Redeploy after adding new variables

**3. API Route Timeouts**

- Increase timeout in Vercel settings (Pro plan)
- Optimize API calls
- Implement caching

**4. 404 on Page Refresh**

- Ensure proper rewrites configured
- Check Vercel routing configuration

## Rollback Strategy

### Vercel Rollback

1. Go to Deployments in Vercel dashboard
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Git Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push -f origin main
```

## Monitoring

### Key Metrics to Track

1. **Performance**:
   - Page load times
   - Core Web Vitals
   - API response times

2. **Availability**:
   - Uptime percentage
   - Error rates
   - Failed deployments

3. **Business Metrics**:
   - Conversion rates
   - Lead generation
   - Chat engagement

### Alerting

**Vercel Integrations**:
- Slack notifications for deployments
- Email alerts for failed builds
- Status page for uptime monitoring

## Maintenance

### Regular Tasks

**Weekly**:
- Review error logs
- Check performance metrics
- Monitor API usage

**Monthly**:
- Update dependencies
- Review and rotate API keys
- Analyze user feedback

**Quarterly**:
- Security audit
- Performance optimization review
- Content updates

## Support & Escalation

### Deployment Issues

1. Check Vercel build logs
2. Review recent commits
3. Test locally with production build
4. Contact Vercel support (if needed)

### API Issues

1. Verify API key validity
2. Check rate limits
3. Review Google AI Studio status
4. Implement fallback responses

---

## Quick Reference

### Essential Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Deploy to Vercel
vercel --prod

# Check logs (Vercel)
vercel logs [deployment-url]
```

### Important URLs

- **Production**: https://www.infiniprox.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Google AI Studio**: https://makersuite.google.com
- **Repository**: https://github.com/Adnan-Pirzada/ipx-marketing

---

**Document Version**: 1.0
**Last Updated**: 2024-12-01
**DevOps Team**: INFINI PRO X

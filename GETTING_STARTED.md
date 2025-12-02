# Getting Started with Infini Pro X Marketing Platform

Welcome! This guide will help you get the marketing platform up and running in minutes.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14.2.13
- React 18.3
- Tailwind CSS 3.4
- Framer Motion
- Google Gemini AI SDK
- Vercel Analytics

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Gemini API key:

```bash
GEMINI_API_KEY=your_actual_api_key_here
GEMINI_MODEL=gemini-1.5-pro
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Getting a Gemini API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and paste it in `.env.local`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your platform!

## 📁 Project Structure

```
ipx-marketing/
├── docs/                       # Comprehensive documentation
│   ├── ARCHITECTURE.md         # System architecture details
│   ├── API_INTEGRATION.md      # Gemini API setup and usage
│   ├── DESIGN_SYSTEM.md        # UI/UX guidelines
│   ├── DEPLOYMENT.md           # Production deployment guide
│   └── VIDEO_CONTENT.md        # Video production specs
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/chat/          # AI chat API endpoint
│   │   ├── layout.tsx         # Root layout with fonts
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   │
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Input.tsx
│   │   │
│   │   ├── layout/            # Layout components
│   │   │   └── Footer.tsx
│   │   │
│   │   └── sections/          # Homepage sections
│   │       ├── Hero.tsx
│   │       ├── Products.tsx
│   │       ├── WhatsAppDemo.tsx
│   │       ├── Features.tsx
│   │       ├── Industries.tsx
│   │       └── CTA.tsx
│   │
│   ├── hooks/                 # Custom React hooks
│   │   └── useAIChat.ts       # AI chat functionality
│   │
│   └── lib/                   # Utilities and services
│       └── ai/
│           ├── gemini-service.ts  # Gemini API setup
│           └── prompts.ts         # AI system prompts
│
├── public/                    # Static assets (add your images here)
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## 🎨 Key Features Implemented

### 1. Hero Section
- Animated background with gradient orbs
- Company tagline and value proposition
- Call-to-action buttons
- Real-time stats showcase

### 2. Products Section
- Four core solutions:
  - WhatsApp AI Agents
  - Custom AI Platforms
  - Process Automation (n8n)
  - Industrial AI Solutions
- Feature highlights for each product
- Industry tags

### 3. WhatsApp AI Demo
- **Live AI chat powered by Google Gemini**
- Interactive chat interface
- Suggested questions to get started
- Real-time AI responses
- Conversation history support

### 4. Features Section
- Six enterprise-grade features
- Icon-based design
- Hover animations

### 5. Industries Section
- Five industry showcases
- Real Estate, E-Commerce, Healthcare, Education, Manufacturing
- Performance stats for each industry

### 6. Contact CTA
- Contact form with validation
- Success state handling
- Quick contact links (email, phone, website)

### 7. Footer
- Company information
- Solution links
- Industry links
- Contact details
- Social media links

## 🤖 AI Integration

The platform includes a fully functional AI chat system powered by Google Gemini:

### Testing the AI Chat

1. Navigate to the WhatsApp Demo section
2. Try one of the suggested questions:
   - "How does WhatsApp AI Agent work?"
   - "What industries do you serve?"
   - "Tell me about pricing"
3. Or ask your own questions!

### How It Works

```
User Message
    ↓
/api/chat endpoint
    ↓
Gemini API (with system prompt)
    ↓
AI Response
    ↓
Displayed in chat
```

### System Prompts

The AI is configured with specialized prompts for:
- **Assistant**: General customer support and product information
- **Lead Qualifier**: Analyzes conversations to score lead quality
- **ROI Calculator**: Estimates business value and savings
- **Product Recommender**: Suggests appropriate solutions

See `src/lib/ai/prompts.ts` for details.

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#0A0F1F',      // Deep space blue
  secondary: '#00C2FF',     // Cyan
  accent: '#4B4B4B',        // Gray
  // ... more colors
}
```

### Typography

Fonts are configured in `src/app/layout.tsx`:
- **Primary**: Inter (body text)
- **Display**: Space Grotesk (headings)
- **Mono**: JetBrains Mono (code)

### Content

Update content in the section components:
- `src/components/sections/Hero.tsx` - Hero content
- `src/components/sections/Products.tsx` - Product details
- `src/components/sections/WhatsAppDemo.tsx` - Demo section
- etc.

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components adapt to screen sizes automatically.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard:
   - Project Settings → Environment Variables
   - Add `GEMINI_API_KEY` and other variables

4. Deploy to production:
```bash
vercel --prod
```

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🔧 Development Tips

### Hot Reload
The dev server supports hot reload. Changes to components will automatically refresh in the browser.

### TypeScript
All files use TypeScript for type safety. VS Code will show errors inline.

### Tailwind IntelliSense
Install the "Tailwind CSS IntelliSense" VS Code extension for autocomplete.

### Component Development
Components use Framer Motion for animations. See existing components for patterns.

## 📚 Additional Documentation

- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - System design and technical decisions
- **[API_INTEGRATION.md](docs/API_INTEGRATION.md)** - Gemini API setup and usage examples
- **[DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)** - Complete UI/UX guidelines
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Production deployment instructions
- **[VIDEO_CONTENT.md](docs/VIDEO_CONTENT.md)** - WhatsApp AI video specifications

## 🐛 Troubleshooting

### Build Errors

**"Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run type-check
```

### API Errors

**"GEMINI_API_KEY is not defined"**
- Ensure `.env.local` exists and contains your API key
- Restart the dev server after adding environment variables

**"Failed to get response"**
- Check your API key is valid in [Google AI Studio](https://makersuite.google.com)
- Verify you're not hitting rate limits

### Styling Issues

**Tailwind classes not working**
- Ensure the file is in `src/` directory
- Check `tailwind.config.ts` includes your file path
- Restart dev server

## 🎯 Next Steps

1. **Add Content**
   - Replace placeholder text with actual company content
   - Add real case studies and testimonials
   - Update contact information

2. **Add Images**
   - Add company logo to `public/`
   - Add product screenshots
   - Add team photos
   - Add client logos

3. **Customize Branding**
   - Adjust colors in `tailwind.config.ts`
   - Update metadata in `src/app/layout.tsx`
   - Customize animations

4. **Extend Functionality**
   - Add more API endpoints (ROI calculator, lead qualifier)
   - Implement form submission handling
   - Add analytics tracking
   - Create blog section

5. **Deploy**
   - Set up custom domain
   - Configure Vercel Analytics
   - Set up monitoring

## 💡 Pro Tips

- Use the AI chat to test different customer scenarios
- Test on real mobile devices, not just browser DevTools
- Run Lighthouse audits to check performance
- Keep dependencies updated with `npm outdated`

## 🆘 Getting Help

- **Documentation**: Check the `/docs` folder
- **Issues**: Review common errors in DEPLOYMENT.md
- **AI Chat**: Use the demo to understand customer perspective

## 📄 License

Proprietary - Copyright © 2024 INFINI PRO X. All rights reserved.

---

**Ready to build something amazing!** 🚀

For detailed technical information, see the documentation in the `/docs` folder.

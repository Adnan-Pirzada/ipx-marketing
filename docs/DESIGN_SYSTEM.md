# Design System

## Overview

The Infini Pro X design system embodies a futuristic, AI-first aesthetic that demonstrates technological sophistication while maintaining professional credibility. This guide establishes the visual language, components, and patterns used throughout the platform.

## Design Philosophy

### Core Principles

1. **AI-First Visual Language**: Every design element should communicate intelligence and automation
2. **Dark Mode Excellence**: Designed dark-first with cyberpunk influences
3. **Performance-Driven**: Beautiful but fast—no design at the expense of performance
4. **Data Visualization**: Make complex AI processes visually comprehensible
5. **Pakistani Context**: Professional but culturally relevant

## Brand Identity

### Logo Usage

```
INFINI PRO X
─────────────
Primary: Full wordmark with geometric elements
Secondary: "IPX" monogram
Minimum size: 120px width
Clear space: Minimum 20px on all sides
```

### Tagline
**"AI-Driven Excellence. Solutions for Every Industry."**

### Brand Personality
- **Professional**: Enterprise-grade credibility
- **Innovative**: Cutting-edge technology
- **Confident**: Industry leadership
- **Approachable**: Client-focused service

## Color System

### Primary Palette

```css
/* Dark Foundation */
--color-primary: #0A0F1F;      /* Deep space blue - backgrounds */
--color-surface: #131824;       /* Surface layer */
--color-elevated: #1A1F2E;      /* Elevated surfaces */

/* Brand Colors */
--color-secondary: #00C2FF;     /* Cyan - primary actions, highlights */
--color-accent: #4B4B4B;        /* Neutral gray - secondary elements */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #0A0F1F 0%, #1A1F2E 100%);
--gradient-glow: linear-gradient(135deg, #00C2FF 0%, #0099CC 100%);
--gradient-mesh: radial-gradient(circle at 50% 50%, #00C2FF20 0%, transparent 50%);
```

### Semantic Colors

```css
/* Status Colors */
--color-success: #10B981;       /* Green - success states */
--color-warning: #F59E0B;       /* Amber - warnings */
--color-error: #EF4444;         /* Red - errors */
--color-info: #3B82F6;          /* Blue - information */

/* Text Colors */
--color-text-primary: #FFFFFF;   /* Primary text on dark */
--color-text-secondary: #A0AEC0; /* Secondary text */
--color-text-tertiary: #718096;  /* Tertiary text */
--color-text-inverse: #0A0F1F;   /* Text on light backgrounds */
```

### Interactive States

```css
/* Hover, Focus, Active */
--color-hover-overlay: rgba(0, 194, 255, 0.1);
--color-focus-ring: rgba(0, 194, 255, 0.5);
--color-active-overlay: rgba(0, 194, 255, 0.2);
```

## Typography

### Font Stack

```css
/* Primary Font - Modern Sans */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Display Font - Bold Headers */
--font-display: 'Space Grotesk', 'Inter', sans-serif;

/* Monospace - Code */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

```css
/* Heading Sizes */
--text-h1: 4rem;      /* 64px - Hero headlines */
--text-h2: 3rem;      /* 48px - Section headers */
--text-h3: 2.25rem;   /* 36px - Subsections */
--text-h4: 1.875rem;  /* 30px - Card headers */
--text-h5: 1.5rem;    /* 24px - Small headers */
--text-h6: 1.25rem;   /* 20px - Tiny headers */

/* Body Sizes */
--text-xl: 1.25rem;   /* 20px - Large body */
--text-lg: 1.125rem;  /* 18px - Body large */
--text-base: 1rem;    /* 16px - Default body */
--text-sm: 0.875rem;  /* 14px - Small text */
--text-xs: 0.75rem;   /* 12px - Captions */
```

### Font Weights

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights

```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

## Spacing System

### Base Unit: 4px

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

## Effects & Shadows

### Glassmorphism

```css
.glass {
  background: rgba(26, 31, 46, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-strong {
  background: rgba(26, 31, 46, 0.9);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.2);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.3);

/* Glow Effects */
--glow-sm: 0 0 10px rgba(0, 194, 255, 0.3);
--glow-md: 0 0 20px rgba(0, 194, 255, 0.4);
--glow-lg: 0 0 40px rgba(0, 194, 255, 0.5);
```

### Borders

```css
--border-radius-sm: 0.25rem;  /* 4px */
--border-radius-md: 0.5rem;   /* 8px */
--border-radius-lg: 1rem;     /* 16px */
--border-radius-xl: 1.5rem;   /* 24px */
--border-radius-full: 9999px; /* Circular */

--border-width-thin: 1px;
--border-width-medium: 2px;
--border-width-thick: 4px;
```

## Animation System

### Timing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Duration

```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 1000ms;
```

### Keyframe Animations

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(0, 194, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 194, 255, 0.6);
  }
}

@keyframes dataFlow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

## Component Library

### Buttons

```tsx
// Primary Button
<button className="
  px-6 py-3
  bg-gradient-to-r from-secondary to-blue-500
  text-white font-semibold
  rounded-lg
  shadow-lg shadow-secondary/50
  hover:shadow-xl hover:shadow-secondary/70
  transition-all duration-300
  hover:scale-105
">
  Get Started
</button>

// Secondary Button
<button className="
  px-6 py-3
  bg-elevated border border-secondary/30
  text-secondary font-semibold
  rounded-lg
  hover:bg-secondary/10 hover:border-secondary
  transition-all duration-300
">
  Learn More
</button>

// Ghost Button
<button className="
  px-6 py-3
  text-text-secondary font-medium
  hover:text-secondary hover:bg-secondary/10
  rounded-lg
  transition-all duration-300
">
  Explore
</button>
```

### Cards

```tsx
// Glass Card
<div className="
  p-6 rounded-xl
  bg-elevated/70 backdrop-blur-xl
  border border-white/10
  hover:border-secondary/50
  transition-all duration-300
  hover:shadow-lg hover:shadow-secondary/20
">
  {/* Card content */}
</div>

// Feature Card with Glow
<div className="
  p-8 rounded-2xl
  bg-gradient-to-br from-elevated to-surface
  border border-secondary/20
  shadow-xl shadow-secondary/10
  hover:shadow-2xl hover:shadow-secondary/30
  transition-all duration-500
  group
">
  {/* Feature content */}
</div>
```

### Input Fields

```tsx
<input className="
  w-full px-4 py-3
  bg-surface border border-white/10
  rounded-lg
  text-text-primary placeholder-text-tertiary
  focus:border-secondary focus:ring-2 focus:ring-secondary/50
  transition-all duration-300
  outline-none
" />
```

### Badges

```tsx
// Status Badge
<span className="
  inline-flex items-center
  px-3 py-1
  bg-success/20 text-success
  rounded-full text-sm font-medium
  border border-success/30
">
  Active
</span>

// Category Badge
<span className="
  inline-flex items-center
  px-3 py-1
  bg-secondary/10 text-secondary
  rounded-full text-xs font-semibold
  hover:bg-secondary/20
  transition-colors duration-200
">
  AI-Powered
</span>
```

## Layout Patterns

### Container

```tsx
<div className="
  max-w-7xl mx-auto
  px-4 sm:px-6 lg:px-8
  py-12 lg:py-24
">
  {/* Content */}
</div>
```

### Grid Layouts

```tsx
// 3-Column Grid
<div className="
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-6 lg:gap-8
">
  {/* Grid items */}
</div>

// Feature Grid with Auto-fit
<div className="
  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
  gap-8
  auto-rows-fr
">
  {/* Feature cards */}
</div>
```

### Section Headers

```tsx
<div className="text-center mb-16">
  <h2 className="
    text-4xl md:text-5xl lg:text-6xl
    font-bold font-display
    bg-gradient-to-r from-white to-text-secondary
    bg-clip-text text-transparent
    mb-4
  ">
    Section Title
  </h2>
  <p className="
    text-lg md:text-xl
    text-text-secondary
    max-w-3xl mx-auto
  ">
    Section description
  </p>
</div>
```

## Interactive Elements

### Hover Effects

```css
/* Scale on Hover */
.hover-scale {
  transition: transform 300ms ease;
}
.hover-scale:hover {
  transform: scale(1.05);
}

/* Glow on Hover */
.hover-glow {
  transition: box-shadow 300ms ease;
}
.hover-glow:hover {
  box-shadow: 0 0 30px rgba(0, 194, 255, 0.5);
}

/* Lift on Hover */
.hover-lift {
  transition: transform 300ms ease, box-shadow 300ms ease;
}
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Loading States

```tsx
// Skeleton Loader
<div className="
  animate-pulse
  bg-elevated rounded-lg
  h-24
" />

// Spinner
<div className="
  w-8 h-8
  border-4 border-secondary/30 border-t-secondary
  rounded-full
  animate-spin
" />

// Dots Animation
<div className="flex gap-2">
  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
</div>
```

## Data Visualization

### Progress Bars

```tsx
<div className="
  w-full h-2
  bg-surface rounded-full
  overflow-hidden
">
  <div
    className="
      h-full bg-gradient-to-r from-secondary to-blue-500
      transition-all duration-500
      shadow-lg shadow-secondary/50
    "
    style={{ width: '60%' }}
  />
</div>
```

### Metrics Display

```tsx
<div className="
  p-6 rounded-xl
  bg-gradient-to-br from-surface to-elevated
  border border-secondary/20
">
  <div className="text-5xl font-bold text-secondary mb-2">
    24/7
  </div>
  <div className="text-text-secondary">
    Customer Support
  </div>
</div>
```

## Accessibility

### Focus States

```css
/* Keyboard Focus */
.focus-visible:focus-visible {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
}

/* Interactive Elements */
button, a, input, textarea {
  @apply focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary;
}
```

### Color Contrast

- Minimum contrast ratio: 4.5:1 for normal text
- Minimum contrast ratio: 3:1 for large text (18px+)
- All interactive elements meet WCAG AA standards

### ARIA Labels

```tsx
<button aria-label="Open chat">
  <ChatIcon />
</button>

<div role="status" aria-live="polite">
  {loadingMessage}
</div>
```

## Responsive Design

### Breakpoints

```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Mobile Optimizations

- Touch targets minimum 44x44px
- Simplified navigation on mobile
- Bottom-sheet patterns for mobile modals
- Swipe gestures for galleries

## Dark Mode Implementation

```tsx
// Root level dark mode (default)
<html className="dark">
  <body className="bg-primary text-text-primary">
    {/* App */}
  </body>
</html>

// Future: Light mode toggle support
// Uses Tailwind's dark: prefix
```

## Icon System

### Recommended: Lucide React

```tsx
import { Sparkles, Zap, Target, BarChart } from 'lucide-react';

<Sparkles className="w-6 h-6 text-secondary" />
```

### Icon Sizes

- Small: 16px (w-4 h-4)
- Medium: 24px (w-6 h-6)
- Large: 32px (w-8 h-8)
- XL: 48px (w-12 h-12)

## Best Practices

1. **Consistency**: Use design tokens, not hard-coded values
2. **Performance**: Optimize animations with `will-change` and `transform`
3. **Accessibility**: Always test with keyboard navigation and screen readers
4. **Responsiveness**: Mobile-first approach, test on real devices
5. **Brand Alignment**: Every design decision reinforces the AI-first narrative

---

**Document Version**: 1.0
**Last Updated**: 2024-12-01
**Design Lead**: INFINI PRO X Creative Team

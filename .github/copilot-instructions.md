# NoIdMe Web UI - AI Coding Guidelines

## Architecture Overview

This is a **content-driven Next.js website** where all text, structure, and content come from a single JSON file (`/public/content/noidme-site.json`). The UI components are generic templates that render based on this externalized content.

**Key Components:**
- `src/components/noidme-site.tsx` - Main client component that fetches and renders all site content
- `src/components/cookie-consent.tsx` - Cookie banner with localStorage persistence and custom events
- `src/app/page.tsx` - Simple page wrapper
- `src/app/layout.tsx` - Standard Next.js layout with metadata

## Content Management

**Content lives in `/public/content/noidme-site.json`** - this is the single source of truth for:
- Site copy, navigation, CTAs
- Section structure and features
- Cookie consent text
- All user-facing strings

When adding new sections or content, update the JSON file and the corresponding TypeScript types in `noidme-site.tsx`.

## Development Workflow

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint checks
```

## TypeScript Patterns

**Strict typing with complex content interfaces:**
- Define content structure types at the top of `noidme-site.tsx`
- Use `as SiteContent` for JSON parsing
- Path mapping: `@/*` resolves to `./src/*`

**Example content type:**
```typescript
type SiteContent = {
  site: { brand: { name: string; subLabel: string } };
  navigation: Array<{ label: string; href: string }>;
  // ... extensive nested structure
};
```

## Styling Conventions

**CSS Variables & Glassmorphism:**
- Custom properties in `:root` for colors, shadows
- Glass-like surfaces with `rgba()` backgrounds
- Gradient backgrounds on body with fixed blur elements
- Font stack: `"Avenir Next", "Segoe UI", sans-serif`

**Class Naming:**
- BEM-like: `site-header`, `hero-section`, `btn-primary`
- Semantic: `container`, `card-grid`, `feature-card`
- State: `section-alt`, `cookie-banner`

## Accessibility First

**Built-in accessibility patterns:**
- Skip links: `<a href="#main-content" className="skip-link">`
- ARIA labels: `aria-label`, `aria-labelledby`, `aria-live`
- Semantic HTML: `<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`
- Screen reader text: `<h2 className="sr-only">`
- Focus management: `tabIndex={-1}` on main content

## Client-Side Patterns

**Data Fetching:**
- Client component fetches JSON on mount
- AbortController for cleanup
- Loading/error states with proper ARIA

**Cookie Consent:**
- localStorage with `"noidme_cookie_consent"` key
- Custom events: `window.dispatchEvent(new Event("noidme-consent-change"))`
- useSyncExternalStore for reactive updates

## Component Structure

**Single Responsibility:**
- `NoIdMeSite` handles content fetching and rendering
- `CookieConsent` manages consent state
- Layout handles metadata and structure

**State Management:**
- React hooks for local state
- External store pattern for cross-component sync

## File Organization

```
src/
  app/           # Next.js app router
    globals.css  # Global styles with CSS variables
    layout.tsx   # Root layout
    page.tsx     # Home page
  components/    # Reusable components
    noidme-site.tsx    # Main content component
    cookie-consent.tsx # Consent banner
public/
  content/
    noidme-site.json   # All site content
```

## Key Files to Reference

- `src/components/noidme-site.tsx` - Content types and rendering logic
- `public/content/noidme-site.json` - Content structure reference
- `src/app/globals.css` - Styling system and variables</content>
<parameter name="filePath">/Users/noidme/noidme-pvt-limited/web-ui-app/.github/copilot-instructions.md
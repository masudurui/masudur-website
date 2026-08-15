# uxshit.com

Personal portfolio website for Md Masudur Rahman — Principal Product Designer & Founder at Uigeek Agency.

Built with **Astro 5**, **TypeScript**, and **Tailwind CSS**.

## Getting started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project structure

```
src/
├── components/         # Reusable UI components
│   ├── BackLink.astro
│   ├── CodeBlock.astro
│   ├── CTA.astro
│   ├── Figure.astro
│   ├── SectionHeading.astro
│   ├── TableOfContents.astro
│   └── VideoFigure.astro
├── layouts/            # Page layouts
│   ├── BaseLayout.astro
│   └── CaseStudyLayout.astro
├── pages/              # File-based routing
│   ├── index.astro
│   └── case-studies/
│       ├── bizwise.astro
│       ├── gotandem.astro
│       ├── monetta.astro
│       ├── neuroroutine.astro
│       ├── shophero.astro
│       └── uigeek.astro
└── styles/
    └── global.css      # Tailwind directives + global styles
public/
└── assets/images/      # Static images (copy from original site)
```

## Images

Copy the `assets/images/` folder from the original website into `public/assets/images/`. The image paths in the components reference this location.

## Key features

- **Astro 5** with static site generation — zero client-side JavaScript by default
- **TypeScript** for type safety across layouts and components
- **Tailwind CSS** for utility-first styling with a custom design system
- **Component-based architecture** with reusable Figure, CTA, SectionHeading, etc.
- **Password-protected case study** (ShopHero) with session-based unlock
- **Copy-to-clipboard email** interaction
- **Responsive design** with mobile-first breakpoints
- **Accessible** — skip links, semantic HTML, focus-visible styles, reduced-motion support
- **Desktop sticky sidebar** table of contents on case study pages (68em+)

## Design tokens

The design system is configured in `tailwind.config.mjs`:

- **Colors**: `ink` (text), `surface` (backgrounds), `ink-muted`, `ink-faint`
- **Typography**: Inter font family, tight tracking on headings
- **Spacing**: Content max-width of 34rem (544px)
- **Motion**: Custom easing curve `ease-smooth`

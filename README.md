# Documentation & Changelog Site

A modern Next.js-based documentation and changelog publishing platform with MDX content support and Algolia search integration.

## Features

- **Next.js 14+ with App Router** - Modern React framework with server components
- **MDX Content** - Write documentation with enhanced Markdown
- **Tailwind CSS v4** - Utility-first CSS framework
- **Algolia Search** - Fast, instant search across all content (optional)
- **Responsive Design** - Mobile-friendly documentation browsing
- **Syntax Highlighting** - Beautiful code blocks with highlight.js
- **Table of Contents** - Auto-generated TOC for long pages
- **Categorized Sidebar** - Organized documentation navigation
- **Changelog Management** - Version-based changelog with dates

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5000`

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── docs/              # Documentation routes
│   ├── changelog/         # Changelog route
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── SearchBox.tsx
│   └── TableOfContents.tsx
├── content/               # MDX content
│   ├── docs/             # Documentation files (.mdx)
│   └── changelogs/       # Changelog entries (.mdx)
├── lib/                   # Utilities
│   ├── docs.ts           # Content helpers
│   └── algolia.ts        # Search client
└── public/               # Static assets
```

## Adding Content

### Documentation

Create MDX files in `content/docs/`:

```mdx
---
title: Page Title
description: Page description
order: 1
category: Getting Started
---

# Your Content Here

Write your documentation using Markdown and MDX.
```

### Changelog Entries

Create MDX files in `content/changelogs/`:

```mdx
---
version: v1.0.0
date: 2024-01-01
title: Release Title
description: Brief description
---

## New Features
- Feature 1
- Feature 2

## Bug Fixes
- Fix 1
- Fix 2
```

## Algolia Search (Optional)

To enable Algolia search:

1. Create an Algolia account and get your credentials
2. Create a `.env.local` file:

```env
NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your_search_key
NEXT_PUBLIC_ALGOLIA_INDEX_NAME=docs
```

3. Index your content to Algolia (you'll need to set up indexing separately)

The search will automatically activate once credentials are configured.

## Customization

### Styling

- Edit `app/globals.css` for global styles
- Modify `tailwind.config.ts` for Tailwind configuration
- Components use Tailwind utility classes

### MDX Plugins

Configure MDX plugins in `next.config.mjs`:

```javascript
const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-slug', 'rehype-highlight'],
  },
})
```

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **MDX** - Enhanced Markdown
- **Algolia** - Search (optional)
- **highlight.js** - Code syntax highlighting
- **gray-matter** - Frontmatter parsing

## License

ISC

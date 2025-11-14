# Documentation & Changelog Site

## Project Overview
A Next.js-based documentation and changelog publishing platform built with MDX content support and Algolia search integration. Created on November 14, 2025.

## Recent Changes
- November 14, 2025: Initial project setup with Next.js 16, Tailwind CSS v4, MDX, and Algolia search
- Implemented documentation system with sidebar navigation and table of contents
- Created changelog system with chronological version history
- Added sample content (Getting Started, Installation, API Reference, Examples)
- Configured for Replit deployment with proper host settings (0.0.0.0:5000)

## Project Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router and Turbopack
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with custom postcss configuration
- **Content**: MDX with gray-matter for frontmatter parsing
- **Search**: Algolia (optional, gracefully degrades if not configured)
- **Syntax Highlighting**: rehype-highlight with highlight.js
- **Deployment**: Configured for Replit with webview on port 5000

### Directory Structure
```
├── app/                    # Next.js app directory
│   ├── docs/              # Documentation routes
│   ├── changelog/         # Changelog route
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx         # Main header with search
│   ├── Sidebar.tsx        # Category-based navigation
│   ├── SearchBox.tsx      # Algolia search modal
│   └── TableOfContents.tsx # Auto-generated TOC
├── content/               # MDX content files
│   ├── docs/             # Documentation (.mdx files)
│   └── changelogs/       # Changelog entries (.mdx files)
└── lib/                   # Utility functions
    ├── docs.ts           # Content loading helpers
    └── algolia.ts        # Search client configuration
```

### Key Features
1. **MDX Documentation**: Markdown with React components
2. **Categorized Sidebar**: Organized by category with active state
3. **Table of Contents**: Auto-generated from heading structure
4. **Algolia Search**: Optional instant search (shows placeholder if not configured)
5. **Syntax Highlighting**: Code blocks with GitHub Dark theme
6. **Responsive Design**: Mobile-friendly layout
7. **Changelog Management**: Version-based with dates and formatting

## Configuration Notes

### Tailwind CSS v4
- Uses `@import "tailwindcss"` syntax
- Configured with `@tailwindcss/postcss` plugin
- No `@apply` directives (uses direct CSS)

### MDX Configuration  
- Turbopack compatible with `mdxRs: false`
- Plugins as strings: `'remark-gfm'`, `'rehype-highlight'`, `'rehype-slug'`
- Uses next-mdx-remote for server-side rendering

### Next.js 16 Specifics
- Dynamic routes use async params: `params: Promise<{ slug: string }>`
- Server components are async when awaiting params
- Configured to bind to 0.0.0.0:5000 for Replit webview

### Algolia Integration (Optional)
- Gracefully degrades if credentials not provided
- Shows "Search not configured" message
- Environment variables: NEXT_PUBLIC_ALGOLIA_APP_ID, NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY

## User Preferences
- Clean, documentation-focused design
- Professional syntax highlighting for code examples
- Easy content authoring with MDX frontmatter
- Search functionality that works or gracefully fails

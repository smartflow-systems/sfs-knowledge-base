import type { Metadata } from 'next'
import './globals.css'
import 'highlight.js/styles/github-dark.css'

export const metadata: Metadata = {
  title: 'Documentation & Changelog',
  description: 'Product documentation and changelog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

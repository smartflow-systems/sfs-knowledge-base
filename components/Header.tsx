'use client'

import Link from 'next/link'
import { useState } from 'react'
import SearchBox from './SearchBox'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            Docs
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/docs" className="text-sm font-medium hover:text-blue-600">
              Documentation
            </Link>
            <Link href="/changelog" className="text-sm font-medium hover:text-blue-600">
              Changelog
            </Link>
          </nav>
        </div>
        
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="flex items-center gap-2 px-4 py-2 text-sm border rounded-md hover:bg-gray-50"
        >
          <span>Search</span>
          <kbd className="hidden sm:inline-block px-2 py-1 text-xs border rounded">⌘K</kbd>
        </button>
      </div>
      
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsSearchOpen(false)}>
          <div className="container mx-auto mt-20 px-4" onClick={(e) => e.stopPropagation()}>
            <SearchBox onClose={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}
    </header>
  )
}

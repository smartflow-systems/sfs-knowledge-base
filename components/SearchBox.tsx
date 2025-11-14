'use client'

import { useState } from 'react'

interface SearchBoxProps {
  onClose: () => void
}

export default function SearchBox({ onClose }: SearchBoxProps) {
  const [query, setQuery] = useState('')

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-2xl mx-auto">
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      </div>
      <div className="p-4 text-sm text-gray-500">
        {query ? (
          <p>Search results will appear here when Algolia is configured.</p>
        ) : (
          <p>Start typing to search...</p>
        )}
      </div>
    </div>
  )
}

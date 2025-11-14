'use client'

import { InstantSearch, SearchBox as AlgoliaSearchBox, Hits, Configure } from 'react-instantsearch'
import { searchClient, indexName } from '@/lib/algolia'
import Link from 'next/link'

interface SearchBoxProps {
  onClose: () => void
}

function Hit({ hit }: { hit: any }) {
  return (
    <Link
      href={hit.url || '#'}
      className="block p-4 hover:bg-gray-50 border-b last:border-b-0"
      onClick={() => {}}
    >
      <div className="font-semibold text-sm mb-1">{hit.title}</div>
      {hit.description && (
        <div className="text-xs text-gray-600">{hit.description}</div>
      )}
    </Link>
  )
}

export default function SearchBox({ onClose }: SearchBoxProps) {
  const isConfigured = searchClient !== null

  if (!isConfigured) {
    return (
      <div className="bg-white rounded-lg shadow-xl max-w-2xl mx-auto p-6">
        <h3 className="font-semibold mb-2">Search not configured</h3>
        <p className="text-sm text-gray-600">
          To enable search, add your Algolia credentials to .env.local
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-2xl mx-auto">
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <Configure hitsPerPage={8} />
        <div className="p-4 border-b">
          <AlgoliaSearchBox
            placeholder="Search documentation..."
            classNames={{
              root: 'w-full',
              form: 'w-full',
              input: 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
              submit: 'hidden',
              reset: 'hidden',
            }}
            autoFocus
          />
        </div>
        <div className="max-h-96 overflow-y-auto">
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </div>
  )
}

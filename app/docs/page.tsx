import Link from 'next/link'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { getAllDocs } from '@/lib/docs'

export default function DocsPage() {
  const docs = getAllDocs()

  const sidebarLinks = docs.map(doc => ({
    title: doc.metadata.title,
    href: `/docs/${doc.slug}`,
    category: doc.metadata.category || 'General',
  }))

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar links={sidebarLinks} />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Documentation</h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to the documentation. Choose a topic from the sidebar or browse below.
            </p>

            <div className="grid gap-6">
              {docs.map(doc => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="block p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
                >
                  <h2 className="text-2xl font-semibold mb-2">{doc.metadata.title}</h2>
                  {doc.metadata.description && (
                    <p className="text-gray-600">{doc.metadata.description}</p>
                  )}
                </Link>
              ))}
            </div>

            {docs.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>No documentation available yet.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

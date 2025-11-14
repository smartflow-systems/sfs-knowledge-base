import Link from 'next/link'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Documentation & Changelog</h1>
            <p className="text-xl text-gray-600 mb-12">
              Comprehensive documentation and product updates in one place
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/docs"
                className="p-8 border rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <h2 className="text-2xl font-semibold mb-3">Documentation</h2>
                <p className="text-gray-600">
                  Browse guides, API references, and tutorials
                </p>
              </Link>
              
              <Link
                href="/changelog"
                className="p-8 border rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <h2 className="text-2xl font-semibold mb-3">Changelog</h2>
                <p className="text-gray-600">
                  Stay updated with the latest features and improvements
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

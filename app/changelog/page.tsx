import { MDXRemote } from 'next-mdx-remote/rsc'
import Header from '@/components/Header'
import { getAllChangelogs } from '@/lib/docs'

export default function ChangelogPage() {
  const changelogs = getAllChangelogs()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Changelog</h1>
          <p className="text-lg text-gray-600 mb-12">
            Track our latest updates, features, and improvements.
          </p>

          <div className="space-y-12">
            {changelogs.map(changelog => (
              <article key={changelog.slug} className="border-b pb-12 last:border-b-0">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {changelog.metadata.version}
                  </span>
                  <time className="text-gray-500">
                    {new Date(changelog.metadata.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                
                <h2 className="text-2xl font-bold mb-3">{changelog.metadata.title}</h2>
                
                {changelog.metadata.description && (
                  <p className="text-gray-600 mb-4">{changelog.metadata.description}</p>
                )}
                
                <div className="prose max-w-none">
                  <MDXRemote source={changelog.content} />
                </div>
              </article>
            ))}
          </div>

          {changelogs.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No changelog entries available yet.</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

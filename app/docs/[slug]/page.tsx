import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import TableOfContents from '@/components/TableOfContents'
import { getAllDocs, getDocBySlug, extractHeadings } from '@/lib/docs'

export async function generateStaticParams() {
  const docs = getAllDocs()
  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = getDocBySlug(slug)

  if (!doc) {
    notFound()
  }

  const allDocs = getAllDocs()
  const sidebarLinks = allDocs.map(d => ({
    title: d.metadata.title,
    href: `/docs/${d.slug}`,
    category: d.metadata.category || 'General',
  }))

  const headings = extractHeadings(doc.content)

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar links={sidebarLinks} />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h1>{doc.metadata.title}</h1>
              {doc.metadata.description && (
                <p className="text-xl text-gray-600">{doc.metadata.description}</p>
              )}
              <MDXRemote source={doc.content} />
            </article>
          </div>
        </main>
        <TableOfContents headings={headings} />
      </div>
    </>
  )
}

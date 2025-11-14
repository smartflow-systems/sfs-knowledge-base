'use client'

interface Heading {
  level: number
  text: string
  id: string
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null

  return (
    <div className="w-64 hidden xl:block">
      <div className="sticky top-20 p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">On this page</h3>
        <nav>
          <ul className="space-y-2 text-sm">
            {headings.map((heading, index) => (
              <li
                key={index}
                style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
              >
                <a
                  href={`#${heading.id}`}
                  className="text-gray-600 hover:text-blue-600 block"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

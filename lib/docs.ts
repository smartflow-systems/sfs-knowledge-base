import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'content/docs')
const changelogsDirectory = path.join(process.cwd(), 'content/changelogs')

export interface DocMetadata {
  title: string
  description?: string
  order?: number
  category?: string
}

export interface ChangelogMetadata {
  version: string
  date: string
  title: string
  description?: string
}

export interface Doc {
  slug: string
  metadata: DocMetadata
  content: string
}

export interface Changelog {
  slug: string
  metadata: ChangelogMetadata
  content: string
}

export function getAllDocs(): Doc[] {
  if (!fs.existsSync(docsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(docsDirectory)
  const docs = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(docsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        metadata: data as DocMetadata,
        content,
      }
    })

  return docs.sort((a, b) => (a.metadata.order || 999) - (b.metadata.order || 999))
}

export function getDocBySlug(slug: string): Doc | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      metadata: data as DocMetadata,
      content,
    }
  } catch {
    return null
  }
}

export function getAllChangelogs(): Changelog[] {
  if (!fs.existsSync(changelogsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(changelogsDirectory)
  const changelogs = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(changelogsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        metadata: data as ChangelogMetadata,
        content,
      }
    })

  return changelogs.sort((a, b) => 
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
}

export function getChangelogBySlug(slug: string): Changelog | null {
  try {
    const fullPath = path.join(changelogsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      metadata: data as ChangelogMetadata,
      content,
    }
  } catch {
    return null
  }
}

export function extractHeadings(content: string) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const headings: { level: number; text: string; id: string }[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2]
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    headings.push({ level, text, id })
  }

  return headings
}

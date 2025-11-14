'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarLink {
  title: string
  href: string
  category?: string
}

interface SidebarProps {
  links: SidebarLink[]
}

export default function Sidebar({ links }: SidebarProps) {
  const pathname = usePathname()

  const categories = Array.from(new Set(links.map(link => link.category || 'General')))

  return (
    <aside className="w-64 border-r bg-gray-50 p-6 overflow-y-auto">
      <nav className="space-y-6">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {category}
            </h3>
            <ul className="space-y-1">
              {links
                .filter(link => (link.category || 'General') === category)
                .map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`sidebar-link ${pathname === link.href ? 'active' : ''}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}

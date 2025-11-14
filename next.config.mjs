import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  experimental: {
    mdxRs: false,
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-slug', 'rehype-highlight'],
  },
})

export default withMDX(nextConfig)

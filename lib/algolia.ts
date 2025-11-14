import { liteClient as algoliasearch } from 'algoliasearch/lite'

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || ''
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''

export const searchClient = (appId && apiKey) ? algoliasearch(appId, apiKey) : null

export const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'docs'

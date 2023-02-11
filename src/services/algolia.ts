import algoliasearch, { type SearchClient } from 'algoliasearch'

let algoliaSearchClient: SearchClient

export const initializeAlgoliaSearchClient = (): void => {
  algoliaSearchClient = algoliasearch(
    import.meta.env.VITE_ALGOLIA_APP_ID,
    import.meta.env.VITE_ALGOLIA_API_KEY,
  )
}

export { algoliaSearchClient }

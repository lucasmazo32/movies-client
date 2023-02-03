import algoliasearch, { SearchClient } from 'algoliasearch'

let algoliaSearchClient: SearchClient

export const initializeAlgoliaSearchClient = () => {
  algoliaSearchClient = algoliasearch(
    import.meta.env.VITE_ALGOLIA_APP_ID,
    import.meta.env.VITE_ALGOLIA_API_KEY,
  )
}

export { algoliaSearchClient }

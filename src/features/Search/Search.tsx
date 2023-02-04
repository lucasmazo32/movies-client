import { FC } from 'react'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { algoliaSearchClient } from '@/services'
import {
  Configure,
  Hits,
  InstantSearch,
  SearchBox,
} from 'react-instantsearch-dom'
import { useNavigate } from 'react-router-dom'

export interface SearchProps {}

const _Hit: FC<{ hit: any }> = ({ hit }) => {
  const navigator = useNavigate()
  const handleClick = () => {
    const searchModalElement: HTMLInputElement = document.getElementById('search-modal') as HTMLInputElement
    searchModalElement.checked = false
    navigator(`/sh/${hit.objectID}`)
  }
  return <a onClick={handleClick}>{hit.title}</a>
}

export const Search: FC<SearchProps> = ({}) => {
  return (
    <>
      <label
        className="btn btn-primary"
        htmlFor="search-modal"
      >
        <SearchIcon className="w-4 h4" />
      </label>
      <input
        type="checkbox"
        id="search-modal"
        className="modal-toggle"
      />
      <label
        htmlFor="search-modal"
        className="modal cursor-pointer flex flex-col"
      >
        <label
          htmlFor=""
          className="modal-box flex flex-col gap-2"
        >
          <InstantSearch
            searchClient={algoliaSearchClient}
            indexName="search_movies_series"
            stalledSearchDelay={300}
          >
            <Configure hitsPerPage={4} />
            <SearchBox
              searchAsYouType={true}
              translations={{
                placeholder: 'Busca aquí...',
              }}
            />
            <Hits hitComponent={_Hit} />
          </InstantSearch>
        </label>
      </label>
    </>
  )
}

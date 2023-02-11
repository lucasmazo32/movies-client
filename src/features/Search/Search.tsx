import { type FC } from 'react'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { algoliaSearchClient } from '@/services'
import {
  Configure,
  Hits,
  InstantSearch,
  SearchBox,
} from 'react-instantsearch-dom'
import { useNavigate } from 'react-router-dom'

const _Hit: FC<{ hit: any }> = ({ hit }) => {
  const navigator = useNavigate()
  const handleClick = (): void => {
    const searchModalElement: HTMLInputElement = document.getElementById(
      'search-modal',
    ) as HTMLInputElement
    searchModalElement.checked = false
    navigator(`/sh/${hit.objectID as string}`)
  }
  return <a onClick={handleClick}>{hit.title}</a>
}

export const Search: FC = () => {
  return (
    <>
      <label
        className="btn btn-primary btn-square btn-sm"
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
        className="modal modal-bottom sm:modal-middle cursor-pointer"
      >
        <label
          htmlFor=""
          className="modal-box"
        >
          <div className="flex flex-col gap-2">
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
          </div>
        </label>
      </label>
    </>
  )
}

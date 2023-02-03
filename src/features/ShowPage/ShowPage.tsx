import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'
import { ShowModel } from '@/models'
import {
  getActors,
  getShowRuntime,
  getShowYear,
  getSlicedShowOverview,
  numToHM,
} from '@/utils'
import { FC } from 'react'
import { ShowPageBtn } from './ShowPageBtn'

export interface ShowPageProps {
  show: ShowModel
}

export const ShowPage: FC<ShowPageProps> = ({ show }) => {
  return (
    <div className="absolute grid grid-cols-5 gap-8 bottom-0 pb-40 text-gray-100 w-full">
      <section className="col-span-3 flex flex-col gap-4">
        <h1>{show.title}</h1>
        <div className="flex items-center gap-2">
          <StarIcon className="h-4 fill-primary" />
          <span className="text-lg font-bold">{show.imdbRating / 10}</span>
          <span className="h-4 w-[1px] bg-gray-100" />
          <span>{show.imdbVoteCount}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <span>{numToHM(getShowRuntime(show))}</span>
          <span>&#183;</span>
          <span>{show.genres.map((g) => g.name).join(', ')}</span>
          <span>&#183;</span>
          <span>{getShowYear(show)}</span>
        </div>
        <div className="text-gray-300">
          <span>{getSlicedShowOverview(show, 300)}</span>
        </div>
        <ShowPageBtn show={show} />
      </section>
      <section className="col-span-2 flex flex-col pt-9 gap-4">
        <span className="text-3xl">Actores</span>
        <span>{getActors(show)}</span>
      </section>
    </div>
  )
}

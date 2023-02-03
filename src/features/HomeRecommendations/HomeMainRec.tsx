import { HBOButton, PrimeButton } from '@/components'
import { ShowModel } from '@/models'
import {
  getShowDirectors,
  getShowRuntime,
  getShowYear,
  getSlicedShowOverview,
} from '@/utils'
import { FC, memo } from 'react'
import { Divider } from 'react-daisyui'
import { useNavigate } from 'react-router-dom'
import { HomeMainRecLink } from './HomeMainRecLink'

export interface HomeMainRecProps {
  show: ShowModel
}

export const HomeMainRec: FC<HomeMainRecProps> = memo(({ show }) => {
  const navigate = useNavigate()
  const handleBackdropClick = () => {
    navigate(`/sh/${show.imdbId}`)
  }
  return (
    <div className="grid grid-cols-6">
      <div
        className="relative col-start-1 col-end-5 hover:scale-105 transition-all cursor-pointer"
        onClick={handleBackdropClick}
      >
        <img
          className="rounded"
          src={show.backdropURLs.original}
        />
        <div className="absolute rounded-tr p-4 bottom-0 bg-base-200 bg-opacity-80">
          <h2>{show.title}</h2>
          <div className="flex items-center gap-4 mt-3">
            <span className="font-semibold">Géneros</span>
            {show.genres.map((genre) => {
              return (
                <span
                  key={genre.name}
                  className="badge px-4 py-3"
                >
                  {genre.name}
                </span>
              )
            })}
          </div>
          <div className="flex items-center gap-4 mt-3">
            <span className="font-semibold">Directores</span>
            <span>{getShowDirectors(show)}</span>
          </div>
        </div>
      </div>
      <div className="px-4 pt-4 col-start-5 col-end-7">
        <span>{getSlicedShowOverview(show)}</span>
        <Divider />
        <div className="flex items-center gap-4">
          <span className="font-semibold">Año</span>
          <span>{getShowYear(show)}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold">Duracion</span>
          <span>{getShowRuntime(show)} minutos</span>
        </div>
        <Divider />
        <HomeMainRecLink streamingInfo={show.streamingInfo} />
      </div>
    </div>
  )
})

HomeMainRec.displayName = 'HomeMainRec'

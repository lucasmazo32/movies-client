import { type ShowModel } from '@/models'
import {
  getShowDirectors,
  getShowRuntime,
  getShowYear,
  getSlicedShowOverview,
  logger,
} from '@/utils'
import { type FC, memo } from 'react'
import { Divider } from 'react-daisyui'
import { useNavigate } from 'react-router-dom'
import { HomeMainRecLink } from './HomeMainRecLink'

export interface HomeMainRecProps {
  show: ShowModel
}

export const HomeMainRec: FC<HomeMainRecProps> = memo(({ show }) => {
  const navigate = useNavigate()
  const handleBackdropClick = (): void => {
    logger.log('navigate', { to: `/sh/${show.imdbId}`, from: '/' })
    navigate(`/sh/${show.imdbId}`)
  }
  return (
    <div className="lg:grid grid-cols-6">
      <div
        className="relative col-start-1 col-end-5 hover:scale-105 transition-all cursor-pointer"
        onClick={handleBackdropClick}
      >
        <img
          className="rounded"
          src={show.backdropURLs.original}
        />
        <div className="sm:absolute rounded-tr sm:p-4 pt-4 bottom-0 sm:bg-base-200 bg-opacity-80">
          <h2>{show.title}</h2>
          <div className="flex items-center sm:gap-4 gap-1 mt-3">
            <span className="font-semibold">Géneros</span>
            {show.genres.map((genre) => {
              return (
                <span
                  key={genre.name}
                  className="badge sm:px-4 sm:py-3"
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
      <div className="flex sm:flex-col flex-col-reverse sm:px-4 px-0 pt-4 col-start-5 col-end-7">
        <span className="sm:block hidden">{getSlicedShowOverview(show)}</span>
        <Divider className="sm:block hidden" />
        <div className="flex items-center gap-4">
          <span className="font-semibold">Año</span>
          <span>{getShowYear(show)}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold">Duracion</span>
          <span>{getShowRuntime(show)} minutos</span>
        </div>
        <Divider />
        <span className="sm:hidden">{getSlicedShowOverview(show)}</span>
        <Divider className="sm:hidden" />
        <HomeMainRecLink show={show} />
      </div>
    </div>
  )
})

HomeMainRec.displayName = 'HomeMainRec'

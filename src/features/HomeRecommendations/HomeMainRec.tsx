import { HBOButton, PrimeButton } from '@/components'
import { ShowModel } from '@/models'
import { FC, memo } from 'react'
import { Divider } from 'react-daisyui'
import { HomeMainRecLink } from './HomeMainRecLink'

export interface HomeMainRecProps {
  show: ShowModel
}

export const HomeMainRec: FC<HomeMainRecProps> = memo(({ show }) => {
  let overview = show.overview
  if (overview.length > 400) {
    overview = overview.slice(0, 400) + '...'
  }
  return (
    <div className="grid grid-cols-6">
      <div className="relative col-start-1 col-end-5">
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
            <span>
              {(show.directors ?? show.creators ?? ['No info']).join(', ')}
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 pt-4 col-start-5 col-end-7">
        <span>{overview}</span>
        <Divider />
        <div className="flex items-center gap-4">
          <span className="font-semibold">Año</span>
          <span>{show.year === 0 ? show.firstAirYear : show.year}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold">Duracion</span>
          <span>
            {show.runtime === 0 ? (show.episodeRuntimes?.at(0) ?? '40') : show.runtime}{' '}
            minutos
          </span>
        </div>
        <Divider />
        <HomeMainRecLink streamingInfo={show.streamingInfo} />
      </div>
    </div>
  )
})

HomeMainRec.displayName = 'HomeMainRec'

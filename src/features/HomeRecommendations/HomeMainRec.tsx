import { Genres } from '@/constants'
import { MovieModel } from '@/models'
import { FC } from 'react'
import { Divider } from 'react-daisyui'

export interface HomeMainRecProps {
  movie: MovieModel
}

export const HomeMainRec: FC<HomeMainRecProps> = ({ movie }) => {
  return (
    <div className="grid grid-cols-6">
      <div className="relative col-start-1 col-end-5">
        <img
          className="rounded"
          src={movie.backdropURLs.original}
        />
        <div className="absolute rounded-tr p-4 bottom-0 bg-base-200 bg-opacity-80">
          <h2>{movie.title}</h2>
          <div className="flex items-center gap-4 mt-3">
            <span className="font-semibold">Géneros</span>
            {movie.genres.map((genre) => {
              return (
                <span
                  key={genre}
                  className="badge px-4 py-3"
                >
                  {Genres[genre as keyof typeof Genres]}
                </span>
              )
            })}
          </div>
          <div className="flex items-center gap-4 mt-3">
            <span className="font-semibold">Directores</span>
            <span>{movie.significants.join(', ')}</span>
          </div>
        </div>
      </div>
      <div className="px-4 pt-4 col-start-5 col-end-7">
        <span>{movie.overview}</span>
        <Divider />
        <div className="flex items-center gap-4">
          <span className="font-semibold">Año</span>
          <span>{movie.year}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold">Duracion</span>
          <span>{movie.runtime} minutos</span>
        </div>
      </div>
    </div>
  )
}

import { MovieModel } from '@/models'
import { FC } from 'react'

export interface HomeCarouselProps {
  recommendations: MovieModel[]
}

export const HomeCarousel: FC<HomeCarouselProps> = ({ recommendations }) => {
  return (
    <div className="mt-4 gap-4 grid grid-cols-6">
      {recommendations.map((r, i) => {
        return (
          <div key={r.imdbID}>
            <img
              src={r.backdropURLs[300]}
              alt={r.title}
              className="rounded border-2 border-transparent"
            />
          </div>
        )
      })}
    </div>
  )
}

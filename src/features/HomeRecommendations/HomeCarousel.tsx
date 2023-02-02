import { MovieModel } from '@/models'
import { FC } from 'react'

export interface HomeCarouselProps {
  recommendations: MovieModel[]
  selected: number
  handleSelect: (index: number) => void
}

export const HomeCarousel: FC<HomeCarouselProps> = ({
  recommendations,
  selected,
  handleSelect,
}) => {
  return (
    <div className="mt-8 gap-4 grid grid-cols-5">
      {recommendations.map((r, i) => {
        return (
          <label
            onClick={() => handleSelect(i)}
            key={r.imdbID}
            className="carousel-btn"
          >
            <input
              type="radio"
              name="home-carousel"
              defaultChecked={i === selected}
              id={`${r.imdbID}-radio`}
              className="hidden"
            />
            <img
              src={r.backdropURLs[300]}
              alt={r.title}
            />
            <span>
              {r.title}
            </span>
          </label>
        )
      })}
    </div>
  )
}

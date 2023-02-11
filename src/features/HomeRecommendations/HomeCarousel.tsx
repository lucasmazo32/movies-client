import { type ShowModel } from '@/models'
import { type FC } from 'react'

export interface HomeCarouselProps {
  recommendations: ShowModel[]
  selected: number
  handleSelect: (index: number) => void
}

export const HomeCarousel: FC<HomeCarouselProps> = ({
  recommendations,
  selected,
  handleSelect,
}) => {
  return (
    <div className="sm:gap-4 gap-1 grid grid-cols-5">
      {recommendations.map((r, i) => {
        return (
          <label
            key={r.imdbId}
            className="carousel-btn"
          >
            <input
              type="radio"
              name="home-carousel"
              onClick={() => {
                handleSelect(i)
              }}
              defaultChecked={i === selected}
              id={`${r.imdbId}-radio`}
              className="hidden"
            />
            <img
              src={r.backdropURLs[300]}
              alt={r.title}
            />
            <span>{r.title}</span>
          </label>
        )
      })}
    </div>
  )
}

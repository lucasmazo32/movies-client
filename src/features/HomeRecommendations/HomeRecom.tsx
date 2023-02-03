import { useAppSelector, useHomepageCarousel } from '@/hooks'
import { FC } from 'react'
import { HomeCarousel } from './HomeCarousel'
import { HomeMainRec } from './HomeMainRec'

export const HomeRecom: FC = () => {
  const recommendations = useAppSelector((state) => state.data.recommendation)
  const { selected, handleSelect } = useHomepageCarousel(4)
  if (!recommendations) {
    return null
  }

  const firstRecommendation = recommendations.shows[selected]
  const otherRecommendations = recommendations.shows.slice(0, 5)
  return (
    <div className="mt-6 rounded bg-base-200 p-4">
      <HomeMainRec show={firstRecommendation} />
      <HomeCarousel
        recommendations={otherRecommendations}
        selected={selected}
        handleSelect={handleSelect}
      />
    </div>
  )
}

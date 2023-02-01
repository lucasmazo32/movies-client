import { useAppSelector } from '@/hooks'
import { FC } from 'react'
import { HomeCarousel } from './HomeCarousel'
import { HomeMainRec } from './HomeMainRec'

export const HomeRecom: FC = () => {
  const recommendations = useAppSelector((state) => state.data.recommendation)
  if (!recommendations) {
    return null
  }

  const firstRecommendation = recommendations.movies[0]
  const otherRecommendations = recommendations.movies.slice(0, 6)
  return (
    <div className="mt-6 rounded bg-base-200 p-4">
      <HomeMainRec movie={firstRecommendation} />
      <HomeCarousel recommendations={otherRecommendations} />
    </div>
  )
}

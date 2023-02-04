import { useAppSelector, useHomepageCarousel } from '@/hooks'
import { FC } from 'react'
import { HomeCarousel } from './HomeCarousel'
import { HomeMainRec } from './HomeMainRec'
import { HomeRecomSkeleton } from './HomeRecomSkeleton'

export const HomeRecom: FC = () => {
  const recommendations = useAppSelector((state) => state.data.recommendation)
  const { selected, handleSelect } = useHomepageCarousel(4)
  if (!recommendations) {
    return <HomeRecomSkeleton />
  }

  const firstRecommendation = recommendations.shows[selected]
  const otherRecommendations = recommendations.shows.slice(0, 5)
  return (
    <div className="flex lg:flex-col flex-col-reverse lg:gap-8 gap-4 mt-6 rounded sm:bg-base-200 sm:p-4 mb-8">
      <HomeMainRec show={firstRecommendation} />
      <HomeCarousel
        recommendations={otherRecommendations}
        selected={selected}
        handleSelect={handleSelect}
      />
    </div>
  )
}

import { ClientNav, HomeRecom, LikeShow } from '@/features'
import { useGetRecommendations } from '@/hooks'
import { type FC } from 'react'

const Homepage: FC = () => {
  useGetRecommendations()

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <ClientNav />
      <HomeRecom />
      <LikeShow />
    </div>
  )
}

export default Homepage

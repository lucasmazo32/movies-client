import { ClientNav, HomeRecom } from '@/features'
import { useGetRecommendations } from '@/hooks'
import { FC } from 'react'

const Homepage: FC = ({}) => {
  useGetRecommendations()

  return (
    <div className="max-w-7xl mx-auto">
      <ClientNav />
      <HomeRecom />
    </div>
  )
}

export default Homepage

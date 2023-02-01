import { ClientNav } from '@/features'
import { HomeRecom } from '@/features/HomeRecommendations'
import { FC } from 'react'

const Homepage: FC = ({}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <ClientNav />
      <HomeRecom />
    </div>
  )
}

export default Homepage

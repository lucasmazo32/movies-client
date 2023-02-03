import { ClientNav, HomeRecom } from '@/features'
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

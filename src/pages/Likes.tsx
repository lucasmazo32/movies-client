import { ClientNav, LikesInfo } from '@/features'
import { type FC } from 'react'

const Likes: FC = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <ClientNav />
      <LikesInfo />
    </div>
  )
}

export default Likes

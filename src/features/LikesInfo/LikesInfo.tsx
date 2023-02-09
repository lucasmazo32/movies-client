import { useAppSelector } from '@/hooks'
import { FC } from 'react'
import { SingleLikeInfo } from './SingleLikeInfo'

export const LikesInfo: FC = ({}) => {
  const likesMap = useAppSelector((state) => state.user.likes)
  const likes = Object.values(likesMap ?? {}).sort(
    (a, b) => a.watchDesire - b.watchDesire,
  )

  return (
    <section className="pt-8">
      <h2 className="text-gray-50">Títulos que quiero ver:</h2>
      <div className="grid grid-cols-3 pt-8">
        {likes.map((like) => {
          return (
            <SingleLikeInfo
              key={like.imdbId}
              like={like}
            />
          )
        })}
      </div>
    </section>
  )
}

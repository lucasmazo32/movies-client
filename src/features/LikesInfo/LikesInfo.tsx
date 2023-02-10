import { useAppSelector } from '@/hooks'
import { FC } from 'react'
import { SingleLikeInfo } from './SingleLikeInfo'

export const LikesInfo: FC = ({}) => {
  const likesMap = useAppSelector((state) => state.user.likes)
  const likes = Object.values(likesMap ?? {}).sort(
    (a, b) => b.watchDesire - a.watchDesire,
  )

  return (
    <section className="pt-8">
      <h3 className="text-gray-50 sm:text-4xl text-xl font-bold">
        Títulos que quiero ver:
      </h3>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 pt-8">
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

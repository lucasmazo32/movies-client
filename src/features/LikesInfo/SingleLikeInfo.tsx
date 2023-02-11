import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'
import { watchDesireRate } from '@/constants'
import { type LikeModel } from '@/models'
import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

export interface SingleLikeInfoProps {
  like: LikeModel
}

export const SingleLikeInfo: FC<SingleLikeInfoProps> = ({ like }) => {
  const navigator = useNavigate()
  const handleClick = (): void => {
    navigator(`/sh/${like.imdbId}`)
  }
  return (
    <div
      onClick={handleClick}
      className="card card-compact card-side bg-base-200 h-60 cursor-pointer hover:scale-105 transition-all"
    >
      <figure className="w-32">
        <img
          src={like.posterUrl}
          alt={`${like.showName} image`}
          className="h-auto w-40 object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{like.showName}</h3>
        <div className="flex items-center gap-2">
          <StarIcon className="h-4 fill-primary" />
          <span>{(like.imdbRaiting / 10).toFixed(1)}</span>
        </div>
        <span>{watchDesireRate[like.watchDesire]}</span>
      </div>
    </div>
  )
}

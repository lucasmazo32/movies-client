import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'
import { watchDesireRate } from '@/constants'
import { LikeModel } from '@/models'
import { FC } from 'react'

export interface SingleLikeInfoProps {
  like: LikeModel
}

export const SingleLikeInfo: FC<SingleLikeInfoProps> = ({ like }) => {
  return (
    <div className="card card-compact card-side bg-base-200 h-60">
      <figure>
        <img
          src={like.posterUrl}
          alt={`${like.showName} image`}
          className="h-full"
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

import {
  DisneyButton,
  HBOButton,
  NetflixButton,
  PrimeButton,
} from '@/components'
import { ServiceCode } from '@/constants'
import { ShowModel } from '@/models'
import { getShowLinks } from '@/utils'
import { FC, HTMLAttributes, memo } from 'react'
import { LikeButton } from '../LikeShow'

export interface ShowPageBtnProps {
  show: ShowModel
}

const mapServiceToButton: Record<
  ServiceCode,
  FC<HTMLAttributes<HTMLButtonElement>>
> = {
  netflix: NetflixButton,
  prime: PrimeButton,
  disney: DisneyButton,
  hbo: HBOButton,
}

export const ShowPageBtn: FC<ShowPageBtnProps> = memo(({ show }) => {
  const streamInfo = getShowLinks(show)
  return (
    <div className="flex flex-wrap gap-4">
      {streamInfo.map((info) => {
        const ButonEl = mapServiceToButton[info.streamService]
        const handleClick = () => {
          window.open(info.link, '_blank')
        }
        return (
          <ButonEl
            key={JSON.stringify(info)}
            onClick={handleClick}
            className="btn-lg btn-wide"
          />
        )
      })}
      <LikeButton imdbId={show.imdbId} className="btn-lg btn-wide text-base" />
    </div>
  )
})

ShowPageBtn.displayName = 'ShowPageBtn'

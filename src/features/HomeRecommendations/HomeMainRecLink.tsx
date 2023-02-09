import {
  DisneyButton,
  HBOButton,
  NetflixButton,
  PrimeButton,
} from '@/components'
import { ServiceCode } from '@/constants'
import { ShowModel } from '@/models'
import { FC, HTMLAttributes } from 'react'
import { LikeButton } from '../LikeShow'

export interface HomeMainRecLinkProps {
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

export const HomeMainRecLink: FC<HomeMainRecLinkProps> = ({ show }) => {
  const services = Object.keys(show.streamingInfo.co).filter((v) =>
    ['netflix', 'prime', 'disney', 'hbo'].includes(v),
  ) as ServiceCode[]
  return (
    <div className="flex gap-4">
      {services.map((s) => {
        const inf = show.streamingInfo.co[s][0]
        const handleClick = () => {
          if (inf.watchLink) {
            window.open(inf.watchLink, '_blank')
          } else {
            window.open(inf.link, '_blank')
          }
        }
        const ButtonEl = mapServiceToButton[s]
        return (
          <ButtonEl
            key={s}
            onClick={handleClick}
          />
        )
      })}
      <LikeButton imdbId={show.imdbId} />
    </div>
  )
}

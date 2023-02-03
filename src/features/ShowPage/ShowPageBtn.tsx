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
    <div>
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
    </div>
  )
})

ShowPageBtn.displayName = 'ShowPageBtn'

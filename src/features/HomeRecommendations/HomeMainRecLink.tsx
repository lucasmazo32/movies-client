import {
  DisneyButton,
  HBOButton,
  NetflixButton,
  PrimeButton,
} from '@/components'
import { ServiceCode } from '@/constants'
import { StreamingInfoMondel } from '@/models'
import { FC, HTMLAttributes } from 'react'

export interface HomeMainRecLinkProps {
  streamingInfo: StreamingInfoMondel
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

export const HomeMainRecLink: FC<HomeMainRecLinkProps> = ({
  streamingInfo,
}) => {
  const services = Object.keys(streamingInfo.co).filter((v) => [
    'netflix',
    'prime',
    'disney',
    'hbo',
  ].includes(v)) as ServiceCode[]
  return (
    <div className="flex">
      {services.map((s) => {
        const inf = streamingInfo.co[s][0]
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
    </div>
  )
}

import { logger } from '@/utils'
import { useEffect, useState } from 'react'

export const useHomepageCarousel = (
  maxIndex: number,
): { selected: number; handleSelect: (index: number) => void } => {
  const [selected, setSelected] = useState<number>(0)
  const [automatic, setAutomatic] = useState<boolean>(true)
  const [timer, setTimer] = useState<number | undefined>()

  useEffect(() => {
    if (automatic) {
      setTimer(
        window.setTimeout(() => {
          let sInc = selected + 1
          if (sInc > maxIndex) {
            sInc = 0
          }
          setSelected(sInc)
        }, 3000),
      )
    }
  }, [selected])

  const handleSelect = (index: number): void => {
    logger.log(`select_recommended_carousel`, { index })
    setAutomatic(false)
    clearTimeout(timer)
    setSelected(index)
    setTimer(undefined)
  }

  return { selected, handleSelect }
}

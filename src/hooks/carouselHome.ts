import { useEffect, useState } from 'react'

export const useHomepageCarousel = (maxIndex: number) => {
  const [selected, setSelected] = useState<number>(0)
  const [automatic, setAutomatic] = useState<boolean>(true)

  let timer: number

  useEffect(() => {
    if (automatic) {
      timer = window.setTimeout(() => {
        let sInc = selected + 1
        if (sInc > maxIndex) {
          sInc = 0
        }
        setSelected(sInc)
      }, 3000)
    }
  }, [selected])

  const handleSelect = (index: number) => {
    setAutomatic(false)
    clearTimeout(timer)
    setSelected(index)
  }

  return { selected, handleSelect }
}

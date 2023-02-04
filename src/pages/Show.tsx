import { Skeleton } from '@/components'
import { ClientNav, ShowPage, ShowPageSkeleton } from '@/features'
import { useGetShowInfo } from '@/hooks'
import { FC } from 'react'

const Show: FC = () => {
  const show = useGetShowInfo()

  if (show === undefined) {
    return (
      <div className="max-w-7xl mx-auto relative h-screen">
        <ClientNav />
        <ShowPageSkeleton />
      </div>
    )
  }

  if (show === false) {
    return null
  }

  return (
    <>
      <img
        src={show.backdropURLs.original}
        className="absolute w-full top-0 left-0 right-0 z-0 image-opacity-gradient"
      />
      <div className="max-w-7xl mx-auto relative h-screen">
        <ClientNav />
        <ShowPage show={show} />
      </div>
    </>
  )
}

export default Show

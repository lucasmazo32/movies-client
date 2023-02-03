import { ClientNav, ShowPage } from '@/features'
import { mockRecommendations } from '@/_mock'
import { FC } from 'react'

const _show = mockRecommendations.shows[0]

const Show: FC = () => {
  return (
    <>
      <img
        src={_show.backdropURLs.original}
        className="absolute w-full top-0 left-0 right-0 z-0 image-opacity-gradient"
      />
      <div className="max-w-7xl mx-auto relative h-screen">
        <ClientNav />
        <ShowPage show={_show} />
      </div>
    </>
  )
}

export default Show

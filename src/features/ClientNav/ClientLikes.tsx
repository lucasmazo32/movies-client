import { type FC } from 'react'
import { Button } from 'react-daisyui'
import { ReactComponent as LikedIcon } from '@/assets/icons/liked.svg'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { logger } from '@/utils'

export const ClientLikes: FC = () => {
  const navigator = useNavigate()
  const likes = useAppSelector((state) => state.user.likes)

  const handleLikeClick = (): void => {
    logger.log('navigate', { to: '/likes', action: 'nav_likes_click' })
    navigator('/likes')
  }

  if (likes === undefined) {
    return null
  }

  return (
    <Button
      shape="square"
      size="sm"
      color="primary"
      onClick={handleLikeClick}
    >
      <LikedIcon className="w-4" />
    </Button>
  )
}

import { FC } from 'react'
import { Button } from 'react-daisyui'
import { ReactComponent as LikedIcon } from '@/assets/icons/liked.svg'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/hooks'

export const ClientLikes: FC = () => {
  const navigator = useNavigate()
  const likes = useAppSelector((state) => state.user.likes)

  const handleLikeClick = () => {
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

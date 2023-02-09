import { FC } from 'react'
import { Button } from 'react-daisyui'
import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'
import { useAppDispatch } from '@/hooks'
import { updatePossibleShow } from '@/state'

export interface LikeButtonProps {
  imdbId: string
}

export const LikeButton: FC<LikeButtonProps> = ({ imdbId }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(updatePossibleShow(imdbId))
  }
  return (
    <Button
      color="primary"
      className="gap-2"
      onClick={handleClick}
    >
      <StarIcon className="w-4" />
      Agregar
    </Button>
  )
}

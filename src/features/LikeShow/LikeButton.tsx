import { FC, HTMLAttributes } from 'react'
import { Button } from 'react-daisyui'
import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'
import { useAppDispatch } from '@/hooks'
import { updatePossibleShow } from '@/state'
import { clx } from '@/utils'

export interface LikeButtonProps
  extends Pick<HTMLAttributes<HTMLButtonElement>, 'className'> {
  imdbId: string
}

export const LikeButton: FC<LikeButtonProps> = ({ imdbId, className }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(updatePossibleShow(imdbId))
  }
  const classes = clx('gap-2', className)
  return (
    <Button
      color="primary"
      className={classes}
      onClick={handleClick}
    >
      <StarIcon className="w-4" />
      Agregar
    </Button>
  )
}

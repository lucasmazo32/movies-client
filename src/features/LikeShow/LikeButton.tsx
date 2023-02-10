import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'
import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { updatePossibleShow } from '@/state'
import { clx } from '@/utils'
import { FC, HTMLAttributes, memo } from 'react'
import { Button } from 'react-daisyui'

export interface LikeButtonProps
  extends Pick<HTMLAttributes<HTMLButtonElement>, 'className'> {
  imdbId: string
}

export const LikeButton: FC<LikeButtonProps> = memo(({ imdbId, className }) => {
  const dispatch = useAppDispatch()
  const likes = useAppSelector((state) => state.user.likes)
  const keys = Object.keys(likes ?? {})
  let added = false
  if (keys.includes(imdbId)) {
    added = true
  }
  const handleClick = () => {
    if (!added) {
      dispatch(updatePossibleShow(imdbId))
    }
  }
  const color = added ? 'info' : 'primary'
  const text = added ? 'Agregado' : 'Agregar'
  const Icon = added ? CheckIcon : StarIcon
  const classes = clx('gap-2', className, { 'cursor-default': added })
  return (
    <Button
      color={color}
      className={classes}
      onClick={handleClick}
    >
      <Icon className="w-4" />
      {text}
    </Button>
  )
})

LikeButton.displayName = 'LikeButton'

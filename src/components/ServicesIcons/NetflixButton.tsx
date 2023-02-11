import { type FC, type HTMLAttributes, memo } from 'react'
import { ReactComponent as NetflixIcon } from '@/assets/services/netflix.svg'
import { clx } from '@/utils'

export interface NetflixButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const NetflixButton: FC<NetflixButtonProps> = memo(
  ({ className, ...props }) => {
    const classes = clx('btn bg-black hover:bg-opacity-95', className)
    return (
      <button
        className={classes}
        {...props}
      >
        <NetflixIcon className="w-16 h-auto" />
      </button>
    )
  },
)

NetflixButton.displayName = 'NetflixButton'

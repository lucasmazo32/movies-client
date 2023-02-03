import { FC, HTMLAttributes, memo } from 'react'
import { ReactComponent as DisneyIcon } from '@/assets/services/disney.svg'
import { clx } from '@/utils'

export interface DisneyButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const DisneyButton: FC<DisneyButtonProps> = memo(
  ({ className, ...props }) => {
    const classes = clx('btn bg-white hover:bg-gray-50', className)
    return (
      <button
        className={classes}
        {...props}
      >
        <DisneyIcon className="w-16 h-auto" />
      </button>
    )
  },
)

DisneyButton.displayName = 'DisneyButton'

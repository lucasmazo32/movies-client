import { type FC, type HTMLAttributes, memo } from 'react'
import { ReactComponent as HBOIcon } from '@/assets/services/hbo.svg'
import { clx } from '@/utils'

export interface HBOButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const HBOButton: FC<HBOButtonProps> = memo(
  ({ className, ...props }) => {
    const classes = clx('btn bg-white hover:bg-gray-50', className)
    return (
      <button
        className={classes}
        {...props}
      >
        <HBOIcon className="w-16 h-auto" />
      </button>
    )
  },
)

HBOButton.displayName = 'HBOButton'

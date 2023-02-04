import { FC, HTMLAttributes, memo } from 'react'
import { ReactComponent as PrimeIcon } from '@/assets/services/prime.svg'
import { clx } from '@/utils'

export interface PrimeButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const PrimeButton: FC<PrimeButtonProps> = memo(
  ({ className, ...props }) => {
    const classes = clx('btn bg-white hover:bg-gray-50', className)
    return (
      <button
        className={classes}
        {...props}
      >
        <PrimeIcon className="w-16 h-auto" />
      </button>
    )
  },
)

PrimeButton.displayName = 'PrimeButton'

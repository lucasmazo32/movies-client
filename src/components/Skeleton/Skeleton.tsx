import { clx } from '@/utils'
import { FC, HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => {
  const classes = clx('animate-pulse bg-gray-500 rounded', className)
  return (
    <div
      className={classes}
      {...props}
    />
  )
}

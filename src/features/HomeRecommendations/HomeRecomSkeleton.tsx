import { Skeleton } from '@/components'
import { FC } from 'react'

export interface HomeRecomSkeletonProps {}

export const HomeRecomSkeleton: FC<HomeRecomSkeletonProps> = ({}) => {
  return (
    <div className="flex lg:flex-col flex-col-reverse lg:gap-8 gap-4 mt-6 rounded sm:bg-base-200 sm:p-4 mb-8">
      <Skeleton className="w-full h-[50vh]" />
      <div className="sm:gap-4 gap-1 grid grid-cols-5">
        <Skeleton className="lg:h-36 h-[14vw]" />
        <Skeleton className="lg:h-36 h-[14vw]" />
        <Skeleton className="lg:h-36 h-[14vw]" />
        <Skeleton className="lg:h-36 h-[14vw]" />
        <Skeleton className="lg:h-36 h-[14vw]" />
      </div>
    </div>
  )
}

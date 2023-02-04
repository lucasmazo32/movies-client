import { Skeleton } from '@/components'
import { FC } from 'react'

export const ShowPageSkeleton: FC = () => {
  return (
    <div className="sm:absolute sm:px-4 sm:mt-0 mt-[40vw] grid grid-cols-5 gap-8 bottom-0 left-0 right-0 sm:pb-40 text-gray-100 w-full">
      <section className="sm:col-span-3 col-span-5 flex flex-col gap-4">
        <Skeleton className="h-[72px] w-2/3" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-1/3" />
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="text-gray-300">
          <Skeleton className="h-12 w-full" />
        </div>
        <Skeleton className="h-16 w-64" />
      </section>
      <section className="col-span-2 sm:flex hidden flex-col pt-9 gap-4">
        <Skeleton className="h-9 w-20" />
        <Skeleton className="h-4 w-full" />
      </section>
    </div>
  )
}

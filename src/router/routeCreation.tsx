import { FC, lazy, LazyExoticComponent, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

interface PageName {
  Element: LazyExoticComponent<FC<{}>>
  path: string
}
const pagesName: PageName[] = [
  {
    Element: lazy<FC>(async () => await import('@/pages/Homepage')),
    path: '/',
  },
  {
    Element: lazy<FC>(async () => await import('@/pages/Login')),
    path: '/login',
  },
  {
    Element: lazy<FC>(async () => await import('@/pages/Show')),
    path: '/sh/:imdb_id'
  },
]

export const pages: RouteObject[] = pagesName.map((p) => {
  return {
    path: p.path,
    element: (
      <Suspense fallback={<div />}>
        <p.Element />
      </Suspense>
    ),
  }
})

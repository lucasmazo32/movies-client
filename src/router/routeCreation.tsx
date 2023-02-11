import { type FC, lazy, type LazyExoticComponent, Suspense } from 'react'
import { type RouteObject } from 'react-router-dom'

interface PageName {
  Element: LazyExoticComponent<FC>
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
    Element: lazy<FC>(async () => await import('@/pages/Likes')),
    path: '/likes',
  },
  {
    Element: lazy<FC>(async () => await import('@/pages/Show')),
    path: '/sh/:imdb_id',
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

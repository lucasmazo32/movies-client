import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { useCheckUserLoggedIn } from './hooks'
import { LikeShow } from '@/features'
import { useGetUserLikes } from './hooks/likes'

function App() {
  useCheckUserLoggedIn()
  useGetUserLikes()

  return (
    <>
      <RouterProvider router={router} />
      <LikeShow />
    </>
  )
}

export default App

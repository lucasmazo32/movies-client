import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { useCheckUserLoggedIn } from './hooks'
import { useGetUserLikes } from './hooks/likes'

function App() {
  useCheckUserLoggedIn()
  useGetUserLikes()

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

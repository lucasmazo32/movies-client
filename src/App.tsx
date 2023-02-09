import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { useCheckUserLoggedIn } from './hooks'
import { LikeShow } from '@/features'

function App() {
  useCheckUserLoggedIn()

  return (
    <>
      <RouterProvider router={router} />
      <LikeShow />
    </>
  )
}

export default App

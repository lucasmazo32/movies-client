import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { useCheckUserLoggedIn } from './hooks'

function App() {
  useCheckUserLoggedIn()
  console.log(import.meta.env)

  return (
    <RouterProvider router={router} />
  )
}

export default App

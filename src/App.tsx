import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { useCheckUserLoggedIn, useRedirectToLoginWhenNecessary } from './hooks'

function App() {
  useCheckUserLoggedIn()

  return (
    <RouterProvider router={router} />
  )
}

export default App

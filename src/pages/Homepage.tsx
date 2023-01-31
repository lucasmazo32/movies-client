import { useRedirectToLoginWhenNecessary } from '@/hooks'
import { FC } from 'react'

const Homepage: FC = ({}) => {
  useRedirectToLoginWhenNecessary()

  return (
    <div>
      Hello world!
    </div>
  )
}

export default Homepage

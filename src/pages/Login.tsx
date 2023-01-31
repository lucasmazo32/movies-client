import { LoginFields } from '@/features'
import { useRedirectToHomepageWhenLogged } from '@/hooks'
import { FC } from 'react'

const Login: FC = () => {
  useRedirectToHomepageWhenLogged()

  return <LoginFields />
}

export default Login

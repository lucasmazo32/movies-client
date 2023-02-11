import { LoginFields } from '@/features'
import { useRedirectToHomepageWhenLogged } from '@/hooks'
import { type FC } from 'react'

const Login: FC = () => {
  useRedirectToHomepageWhenLogged()

  return <LoginFields />
}

export default Login

import { FC } from 'react'
import { Navbar } from 'react-daisyui'
import { ReactComponent as LogoIcon } from '@/assets/logo/logo.svg'
import { ClientNavUserLogin } from './ClientNavUserLogin'

export const ClientNav: FC = () => {
  return (
    <Navbar className="justify-between">
      <LogoIcon className="fill-primary" />
      <ClientNavUserLogin />
    </Navbar>
  )
}

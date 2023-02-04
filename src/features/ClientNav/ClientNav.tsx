import { FC } from 'react'
import { Button, Navbar } from 'react-daisyui'
import { ReactComponent as LogoIcon } from '@/assets/logo/logo.svg'
import { ClientNavUserLogin } from './ClientNavUserLogin'
import { useNavigate } from 'react-router-dom'
import { Search } from '../Search'

export const ClientNav: FC = () => {
  const navigator = useNavigate()

  const handleLogoClick = () => {
    navigator('/')
  }

  return (
    <Navbar className="justify-between relative z-40">
      <Button
        onClick={handleLogoClick}
        color="primary"
        className="btn-square sm:btn-md btn-sm"
      >
        <LogoIcon className="fill-base-100" />
      </Button>
      <div className="flex gap-4">
        <Search />
        <ClientNavUserLogin />
      </div>
    </Navbar>
  )
}

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
        className="bg-base-100 hover:bg-base-100 border-transparent hover:border-transparent"
      >
        <LogoIcon className="fill-primary" />
      </Button>
      <div className="flex gap-4">
        <Search />
        <ClientNavUserLogin />
      </div>
    </Navbar>
  )
}

import { FC } from 'react'
import { Button, Navbar } from 'react-daisyui'
import { ReactComponent as LogoIcon } from '@/assets/logo/logo.svg'
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ClientNavUserLogin } from './ClientNavUserLogin'
import { useNavigate } from 'react-router-dom'
import { Search } from '../Search'
import { ClientLikes } from './ClientLikes'

export const ClientNav: FC = () => {
  const navigator = useNavigate()

  const handleLogoClick = () => {
    navigator('/')
  }

  return (
    <Navbar className="justify-between relative z-40">
      <div className="flex gap-4">
        <Button
          onClick={handleLogoClick}
          color="primary"
          className="btn-square sm:btn-md btn-sm"
        >
          <LogoIcon className="fill-base-100 h-6 w-6" />
        </Button>
        <Button
          shape="square"
          size="sm"
          color="primary"
          onClick={handleLogoClick}
        >
          <HomeIcon className="w-4" />
        </Button>
        <ClientLikes />
      </div>
      <div className="flex gap-4">
        <Search />
        <ClientNavUserLogin />
      </div>
    </Navbar>
  )
}

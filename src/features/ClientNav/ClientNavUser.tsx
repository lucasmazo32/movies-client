import { type FC } from 'react'
import { ReactComponent as UserIcon } from '@/assets/navbar/user.svg'
import { useSignOut } from '@/hooks'
import { logger } from '@/utils'

export const ClientNavUser: FC = () => {
  const handleSignOut = useSignOut()
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-primary btn-square btn-sm"
      >
        <UserIcon className="h-5 w-5" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu sm:menu-normal menu-compact p-2 shadow bg-base-300 rounded-box sm:w-52 w-32"
      >
        <li>
          <a
            onClick={() => {
              handleSignOut().catch((e) => {
                logger.error(e)
              })
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}

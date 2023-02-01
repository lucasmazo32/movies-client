import { FC } from 'react'
import { ReactComponent as UserIcon } from '@/assets/navbar/user.svg'

export interface ClientNavUserProps {}

export const ClientNavUser: FC<ClientNavUserProps> = ({}) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-primary btn-circle"
      >
        <UserIcon className="h-5 w-5" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
      >
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  )
}

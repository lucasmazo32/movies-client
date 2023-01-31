import { FC } from 'react'
import { Button, Input } from 'react-daisyui'

export interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = ({}) => {
  return (
    <form className="w-full flex flex-col gap-6">
      <input
        type="email"
        placeholder="Correo"
        className="client-input rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="client-input rounded"
      />
      <Button disabled>
        Ingresa
      </Button>
    </form>
  )
}

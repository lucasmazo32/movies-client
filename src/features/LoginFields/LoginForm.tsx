import { type FC } from 'react'
import { Button } from 'react-daisyui'

export const LoginForm: FC = () => {
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

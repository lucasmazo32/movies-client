import { FC } from 'react'
import { Button, Divider } from 'react-daisyui'
import { ReactComponent as GoogleIcon } from '@/assets/login/google.svg'
import { LoginForm } from './LoginForm'
import { useGoogleFirebaseAuth } from '@/hooks'

export interface LoginOptionsProps {}

export const LoginOptions: FC<LoginOptionsProps> = ({}) => {
  const loginGoogle = useGoogleFirebaseAuth()

  return (
    <div className="h-screen p-4 box-border w-96 max-w-full mx-auto flex flex-col items-center justify-center">
      <h2 className="w-full text-left">¡Hola de nuevo!</h2>
      <span className="w-full text-left mt-2">
        Entra tus credenciales para continuar
      </span>
      <Button
        onClick={loginGoogle}
        className="bg-white hover:bg-white hover:bg-opacity-80 text-base-100 rounded btn-block mt-8"
      >
        <GoogleIcon className="mr-2" /> Ingresa con Google
      </Button>
      <Divider className="my-6">o</Divider>
      <LoginForm />
    </div>
  )
}

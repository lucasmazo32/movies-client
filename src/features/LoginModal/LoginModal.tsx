import { useAppDispatch } from '@/hooks'
import { updatePossibleShow } from '@/state'
import { FC } from 'react'
import { Button } from 'react-daisyui'
import { useNavigate } from 'react-router-dom'

interface LoginModalProps {
  checked: boolean
}

export const LoginModal: FC<LoginModalProps> = ({ checked }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(updatePossibleShow(undefined))
  }
  const handleSignIn = () => {
    dispatch(updatePossibleShow(undefined))
    navigate('/login')
  }
  return (
    <>
      <input
        checked={checked}
        readOnly
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¡Ingresa a la página!</h3>
          <p className="py-4">
            Para agregar este o cualquier otro título primero tienes que
            ingresar con tu usuario.
          </p>
          <div className="modal-action grid grid-cols-2">
            <Button onClick={handleClose}>Solo estoy viendo</Button>
            <Button
              onClick={handleSignIn}
              color="primary"
            >
              Ingresar
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

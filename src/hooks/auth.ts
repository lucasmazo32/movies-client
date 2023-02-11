import { logoutUser, updateUser } from '@/state'
import { logger } from '@/utils'
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './redux'

const pathsToRedirectToHomeAfterSignOut = ['/likes']

export const useGoogleFirebaseAuth = async (): Promise<() => void> => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  auth.useDeviceLanguage()
  await setPersistence(auth, browserLocalPersistence)
  const handleGoogleLogin = (): void => {
    logger.log('google_popup_sign_in')
    signInWithPopup(auth, provider)
      .then((credentials) => {
        dispatch(
          updateUser({
            name: credentials.user.displayName ?? 'Cineauta',
            email: credentials.user.email ?? '',
            uid: credentials.user.uid,
          }),
        )
        navigate('/')
      })
      .catch((e) => {
        logger.error(e)
      })
  }
  return handleGoogleLogin
}

export const useCheckUserLoggedIn = (): void => {
  const auth = getAuth()
  const dispatch = useAppDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      logger.debug(`Got user ${user?.uid ?? 'none'}`)
      if (user) {
        dispatch(
          updateUser({
            name: user.displayName ?? 'Cineauta',
            email: user.email ?? '',
            uid: user.uid,
          }),
        )
      } else {
        dispatch(updateUser(null))
      }
    })
  }, [])
}

export const useRedirectToLoginWhenNecessary = (): void => {
  const userSubstate = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (userSubstate.userInfo === null) {
      navigate('/login')
    }
  }, [userSubstate.fetched])
}

export const useRedirectToHomepageWhenLogged = (): void => {
  const userSubstate = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (userSubstate.userInfo !== null) {
      logger.log('redirecting', { to: '/', from: '/login' })
      navigate('/')
    }
  }, [userSubstate.fetched])
}

export const useSignOut = (): (() => Promise<void>) => {
  const auth = getAuth()
  const navigator = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const handleSignOut = async (): Promise<void> => {
    logger.log('sign_out', { action: 'button_click' })
    try {
      await signOut(auth)
      if (pathsToRedirectToHomeAfterSignOut.includes(location.pathname)) {
        navigator('/')
      }
      dispatch(logoutUser())
    } catch (error) {
      logger.error(error)
    }
  }
  return handleSignOut
}

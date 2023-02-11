import { logoutUser, updateUser } from '@/state'
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

export const useGoogleFirebaseAuth = () => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  auth.useDeviceLanguage()
  setPersistence(auth, browserLocalPersistence)
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((credentials) => {
      dispatch(
        updateUser({
          name: credentials.user.displayName ?? 'Cineauta',
          email: credentials.user.email ?? '',
          uid: credentials.user.uid,
        }),
      )
      navigate('/')
    })
  }
  return handleGoogleLogin
}

export const useCheckUserLoggedIn = () => {
  const auth = getAuth()
  const dispatch = useAppDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
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

export const useRedirectToLoginWhenNecessary = () => {
  const userSubstate = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (userSubstate.userInfo === null) {
      navigate('/login')
    }
  }, [userSubstate.fetched])
}

export const useRedirectToHomepageWhenLogged = () => {
  const userSubstate = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (userSubstate.userInfo !== null) {
      navigate('/')
    }
  }, [userSubstate.fetched])
}

export const useSignOut = () => {
  const auth = getAuth()
  const navigator = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      if (pathsToRedirectToHomeAfterSignOut.includes(location.pathname)) {
        navigator('/')
      }
      dispatch(logoutUser())
    } catch (error) {
      console.log(error)
    }
  }
  return handleSignOut
}

import { fetchUserInformationThunk } from "@/state/thunk"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./redux"

export const useGetUserLikes = () => {
  const dispatch = useAppDispatch()
  const uid = useAppSelector((state) => state.user.userInfo)?.uid
  const likes = useAppSelector(state => state.user.likes)

  useEffect(() => {
    if (uid && likes === undefined) {
      dispatch(fetchUserInformationThunk(uid))
    }
  }, [uid])
}

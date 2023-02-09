import { fetchRecommendationsThunk } from '@/state/thunk'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux'

export const useGetRecommendations = () => {
  const dispatch = useAppDispatch()
  const uid = useAppSelector((state) => state.user.userInfo)?.uid
  const recommendations = useAppSelector((state) => state.data.recommendation)

  useEffect(() => {
    if (!recommendations) {
      dispatch(fetchRecommendationsThunk(uid ?? 'default'))
    }
  }, [uid])
}

import { fetchRecommendationsThunk } from '@/state/thunk'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux'

export const useGetRecommendations = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.userInfo)
  const recommendations = useAppSelector((state) => state.data.recommendation)

  useEffect(() => {
    if (!recommendations) {
      dispatch(fetchRecommendationsThunk(user?.uid ?? 'default'))
    }
  }, [user])
}

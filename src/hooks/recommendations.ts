import { fetchRecommendationsThunk } from '@/state/thunk'
import { logger } from '@/utils'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux'

export const useGetRecommendations = (): void => {
  const dispatch = useAppDispatch()
  const uid = useAppSelector((state) => state.user.userInfo)?.uid
  const recommendations = useAppSelector((state) => state.data.recommendation)

  useEffect(() => {
    if (!recommendations) {
      dispatch(fetchRecommendationsThunk(uid ?? 'default')).catch((e) => {
        logger.error(e)
      })
    }
  }, [uid])
}

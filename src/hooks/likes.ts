import { type ShowModel } from '@/models'
import { postLike } from '@/services'
import { addLike } from '@/state'
import { fetchUserInformationThunk } from '@/state/thunk'
import { logger } from '@/utils'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux'

export const useGetUserLikes = (): void => {
  const dispatch = useAppDispatch()
  const uid = useAppSelector((state) => state.user.userInfo)?.uid
  const likes = useAppSelector((state) => state.user.likes)

  useEffect(() => {
    if (uid && likes === undefined) {
      dispatch(fetchUserInformationThunk(uid)).catch((e) => {
        logger.error(e)
      })
    }
  }, [uid])
}

export const useAddLikeForShow = (): {
  handleAddLikeClick: (show: ShowModel, showDesire: number) => Promise<boolean>
  loading: boolean
} => {
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const uid = useAppSelector((state) => state.user.userInfo?.uid)

  const handleAddLikeClick = async (
    show: ShowModel,
    showDesire: number,
  ): Promise<boolean> => {
    logger.log(`add_click`, {
      imdbId: show.imdbId,
    })
    if (!uid) {
      return false
    }

    setLoading(true)

    try {
      await postLike({
        showName: show.title,
        backdropUrl: show.backdropURLs.original,
        posterUrl: show.posterURLs.original,
        imdbId: show.imdbId,
        imdbRaiting: show.imdbRating,
        watchDesire: showDesire,
        uid,
      })
      setLoading(false)
      dispatch(
        addLike({
          showName: show.title,
          backdropUrl: show.backdropURLs.original,
          posterUrl: show.posterURLs.original,
          imdbId: show.imdbId,
          imdbRaiting: show.imdbRating,
          watchDesire: showDesire,
          watched: false,
          score: 0,
          uid,
        }),
      )
      return true
    } catch (error) {
      logger.error(error)
      return false
    }
  }

  return { handleAddLikeClick, loading }
}

import { ShowModel } from '@/models'
import { postLike } from '@/services'
import { addLike } from '@/state'
import { fetchUserInformationThunk } from '@/state/thunk'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux'

export const useGetUserLikes = () => {
  const dispatch = useAppDispatch()
  const uid = useAppSelector((state) => state.user.userInfo)?.uid
  const likes = useAppSelector((state) => state.user.likes)

  useEffect(() => {
    if (uid && likes === undefined) {
      dispatch(fetchUserInformationThunk(uid))
    }
  }, [uid])
}

export const useAddLikeForShow = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const uid = useAppSelector((state) => state.user.userInfo?.uid)

  const handleAddLikeClick = async (
    show: ShowModel,
    showDesire: number,
  ): Promise<boolean> => {
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
          uid: uid,
        }),
      )
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  return { handleAddLikeClick, loading }
}

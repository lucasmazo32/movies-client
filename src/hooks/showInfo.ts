import { type ShowModel } from '@/models'
import { fetchShowByIdThunk } from '@/state/thunk'
import { logger } from '@/utils'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './redux'

export const useGetShowInfo = (): ShowModel | false | undefined => {
  const params = useParams()
  const imdbId = params.imdb_id
  const shows = useAppSelector((state) => state.data.shows)
  const show: ShowModel | false | undefined =
    shows[imdbId as keyof typeof shows]
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (show === undefined) {
      dispatch(fetchShowByIdThunk(imdbId ?? '')).catch((e) => {
        logger.error(e)
      })
    }
  }, [show])

  return show
}

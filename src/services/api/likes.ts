import { http } from '../http'

interface input {
  imdbId: string
  backdropUrl: string
  imdbRaiting: number
  showName: string
  posterUrl: string
  watchDesire: number
  uid: string
}

export const postLike = async (data: input): Promise<unknown> => {
  return await http.post('/likes', data)
}

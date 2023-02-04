import { ShowModel } from '@/models'
import { http } from '../http'

export const fetchShowById = async (
  imdbId: string,
): Promise<ShowModel> => {
  try {
    return await http.get<ShowModel>(`/shows/${imdbId}`)
  } catch (error) {
    throw error
  }
}

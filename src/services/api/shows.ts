import { type ShowModel } from '@/models'
import { http } from '../http'

export const fetchShowById = async (
  imdbId: string,
): Promise<ShowModel> => {
    return await http.get<ShowModel>(`/shows/${imdbId}`)
}

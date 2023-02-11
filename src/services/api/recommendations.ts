import { type RecommendationModel } from '@/models'
import { http } from '../http'

export const fetchRecommendations = async (
  user: string,
): Promise<RecommendationModel> => {
    return await http.get<RecommendationModel>(`/recommendations/${user}`)
}

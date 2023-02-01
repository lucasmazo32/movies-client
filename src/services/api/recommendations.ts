import { RecommendationModel } from '@/models'
import { http } from '../http'

export const fetchRecommendations = async (
  user: string,
): Promise<RecommendationModel> => {
  try {
    return await http.get<RecommendationModel>(`/recommendations/${user}`)
  } catch (error) {
    throw error
  }
}

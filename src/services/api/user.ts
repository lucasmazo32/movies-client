import { UserReturnModel } from '@/models'
import { http } from '../http'

export const fetchUserInformation = async (uid: string): Promise<UserReturnModel> => {
  try {
    return await http.get<UserReturnModel>(`/users/${uid}`)
  } catch (error) {
    throw error
  }
}

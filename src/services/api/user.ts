import { type UserReturnModel } from '@/models'
import { http } from '../http'

export const fetchUserInformation = async (
  uid: string,
): Promise<UserReturnModel> => {
  return await http.get<UserReturnModel>(`/users/${uid}`)
}

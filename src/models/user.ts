import { type LikeModel } from './like'

export interface UserModel {
  name: string
  email: string
  uid: string
}

export interface UserReturnModel {
  likes: Record<string, LikeModel>
}

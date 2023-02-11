import { type LikeModel, type UserModel } from '@/models'
import { logger } from '@/utils'
import {
  createSlice,
  type PayloadAction,
  type SliceCaseReducers,
} from '@reduxjs/toolkit'
import { fetchUserInformationThunk } from '../thunk'

interface UserState {
  userInfo: null | UserModel
  fetched: boolean
  likes?: Record<string, LikeModel>
}

const initialState: UserState = { userInfo: null, fetched: false }

interface UserReducers extends SliceCaseReducers<UserState> {
  updateUser: (
    state: UserState,
    payload: PayloadAction<UserModel | null>,
  ) => void
  addLike: (state: UserState, payload: PayloadAction<LikeModel>) => void
  logoutUser: (state: UserState, payload: PayloadAction<void>) => void
}

export const userSlice = createSlice<UserState, UserReducers, 'user'>({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      logger.state('user/updateUser', action.payload?.uid ?? 'none')
      state.userInfo = action.payload
      state.fetched = true
    },
    addLike: (state, action) => {
      logger.state('user/addLike', action.payload.imdbId)
      state.likes = { ...state.likes, [action.payload.imdbId]: action.payload }
    },
    logoutUser: (state, _) => {
      logger.state('user/logoutUser', 'logoutUser')
      state.userInfo = null
      state.likes = undefined
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchUserInformationThunk.fulfilled, (state, action) => {
      logger.state('user/fetchUserInformationThunk', 'success')
      state.likes = action.payload.likes
    }).addCase(fetchUserInformationThunk.rejected, () => {
      logger.state('user/fetchUserInformationThunk', 'rejected')
    }),
})

export const { updateUser, addLike, logoutUser } = userSlice.actions

export default userSlice.reducer

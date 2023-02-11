import { type LikeModel, type UserModel } from '@/models'
import { createSlice, type PayloadAction, type SliceCaseReducers } from '@reduxjs/toolkit'
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
      state.userInfo = action.payload
      state.fetched = true
    },
    addLike: (state, action) => {
      state.likes = { ...state.likes, [action.payload.imdbId]: action.payload }
    },
    logoutUser: (state, _) => {
      state.userInfo = null
      state.likes = undefined
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchUserInformationThunk.fulfilled, (state, action) => {
      state.likes = action.payload.likes
    }),
})

export const { updateUser, addLike, logoutUser } = userSlice.actions

export default userSlice.reducer

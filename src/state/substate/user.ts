import { LikeModel, UserModel } from '@/models'
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
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
}

export const userSlice = createSlice<UserState, UserReducers, 'user'>({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userInfo = action.payload
      state.fetched = true
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchUserInformationThunk.fulfilled, (state, action) => {
      state.likes = action.payload.likes
    }),
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer

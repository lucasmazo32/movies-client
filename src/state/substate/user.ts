import { UserModel } from '@/models'
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

interface UserState {
  userInfo: null | UserModel
  fetched: boolean
}

const initialState: UserState = { userInfo: null, fetched: false }

interface UserReducers extends SliceCaseReducers<UserState> {
  updateUser: (state: UserState, payload: PayloadAction<UserModel | null>) => void
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
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer

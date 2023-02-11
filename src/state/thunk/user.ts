import { type UserReturnModel } from '@/models'
import { fetchUserInformation } from '@/services'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserInformationThunk = createAsyncThunk<
  UserReturnModel,
  string
>('user/getUserInformationThunk', async (uid) => {
  return await fetchUserInformation(uid)
})

import { UserReturnModel } from '@/models'
import { fetchUserInformation } from '@/services'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserInformationThunk = createAsyncThunk<UserReturnModel, string>(
  'user/getUserInformationThunk',
  async (uid) => {
    try {
      return await fetchUserInformation(uid)
    } catch (error) {
      throw error
    }
  },
)

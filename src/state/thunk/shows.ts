import { ShowModel } from '@/models'
import { fetchShowById } from '@/services'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchShowByIdThunk = createAsyncThunk<ShowModel, string>(
  'data/showsByIdThunk',
  async (imdbId) => {
    try {
      return await fetchShowById(imdbId)
    } catch (error) {
      throw new Error(imdbId)
    }
  },
)

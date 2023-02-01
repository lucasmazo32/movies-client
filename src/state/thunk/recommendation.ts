import { RecommendationModel } from '@/models'
import { fetchRecommendations } from '@/services'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRecommendationsThunk = createAsyncThunk<
  RecommendationModel,
  string
>('data/recommendations', async (uid) => {
  try {
    return await fetchRecommendations(uid)
  } catch (error) {
    throw error
  }
})

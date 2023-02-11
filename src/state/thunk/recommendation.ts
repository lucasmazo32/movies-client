import { type RecommendationModel } from '@/models'
import { fetchRecommendations } from '@/services'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRecommendationsThunk = createAsyncThunk<
  RecommendationModel,
  string
>('data/recommendations', async (uid) => {
    return await fetchRecommendations(uid)
})

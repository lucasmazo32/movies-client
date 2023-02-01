import { RecommendationModel } from '@/models'
import { mockRecommendations } from '@/_mock'
import { createSlice } from '@reduxjs/toolkit'
import { fetchRecommendationsThunk } from '../thunk'

interface DataState {
  recommendation?: RecommendationModel
  recommendationsFetched: boolean
}

const initialState: DataState = {
  recommendation: mockRecommendations,
  recommendationsFetched: false,
}

export const dataSlice = createSlice<DataState, {}, 'data'>({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(fetchRecommendationsThunk.fulfilled, (state, action) => {
        state.recommendation = action.payload
        state.recommendationsFetched = true
      })
      .addCase(fetchRecommendationsThunk.rejected, (state, _) => {
        state.recommendationsFetched = true
      }),
})

export const {} = dataSlice.actions

export default dataSlice.reducer

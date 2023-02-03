import { RecommendationModel, ShowModel } from '@/models'
import { mockRecommendations } from '@/_mock'
import { createSlice } from '@reduxjs/toolkit'
import { fetchRecommendationsThunk } from '../thunk'

interface DataState {
  recommendation?: RecommendationModel
  shows: Record<string, ShowModel>
  recommendationsFetched: boolean
}

const initialState: DataState = {
  recommendation: mockRecommendations,
  shows: {
    ...mockRecommendations.shows.reduce((result, show) => {
      result[show.imdbId] = show
      return result
    }, {} as Record<string, ShowModel>),
  },
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
        action.payload.shows.forEach((s) => {
          state.shows[s.imdbId] = s
        })
      })
      .addCase(fetchRecommendationsThunk.rejected, (state, _) => {
        state.recommendationsFetched = true
      }),
})

export const {} = dataSlice.actions

export default dataSlice.reducer

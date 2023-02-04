import { RecommendationModel, ShowModel } from '@/models'
import { mockRecommendations } from '@/_mock'
import { createSlice } from '@reduxjs/toolkit'
import { fetchRecommendationsThunk, fetchShowByIdThunk } from '../thunk'

interface DataState {
  recommendation?: RecommendationModel
  shows: Record<string, ShowModel | false>
  recommendationsFetched: boolean
}

const initialState: DataState = {
  shows: {},
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
      })
      .addCase(fetchShowByIdThunk.fulfilled, (state, action) => {
        state.shows[action.payload.imdbId] = action.payload
      })
      .addCase(fetchShowByIdThunk.rejected, (state, action) => {
        state.shows[action.error.message ?? ''] = false
      }),
})

export const {} = dataSlice.actions

export default dataSlice.reducer

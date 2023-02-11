import { type RecommendationModel, type ShowModel } from '@/models'
import { createSlice, type PayloadAction, type SliceCaseReducers } from '@reduxjs/toolkit'
import { fetchRecommendationsThunk, fetchShowByIdThunk } from '../thunk'

interface DataState {
  recommendation?: RecommendationModel
  shows: Record<string, ShowModel | false>
  recommendationsFetched: boolean
  possibleShow?: string
}

const initialState: DataState = {
  shows: {},
  recommendationsFetched: false,
}

interface DataReducers extends SliceCaseReducers<DataState> {
  updatePossibleShow: (
    state: DataState,
    payload: PayloadAction<string | undefined>,
  ) => void
}

export const dataSlice = createSlice<DataState, DataReducers, 'data'>({
  name: 'data',
  initialState,
  reducers: {
    updatePossibleShow: (state, action) => {
      state.possibleShow = action.payload
    },
  },
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

export const { updatePossibleShow } = dataSlice.actions

export default dataSlice.reducer

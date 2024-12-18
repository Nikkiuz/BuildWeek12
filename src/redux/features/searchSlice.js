import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: '',
  jobs: [],
  loading: false,
  error: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    fetchJobsStart: (state) => {
      state.loading = true
    },
    fetchJobsSuccess: (state, action) => {
      state.jobs = action.payload
      state.loading = false
      state.error = null
    },
    fetchJobsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { setQuery, fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } =
  searchSlice.actions

export default searchSlice.reducer

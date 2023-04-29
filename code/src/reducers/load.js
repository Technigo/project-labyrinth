import { createSlice } from '@reduxjs/toolkit'
/* Rename to load or loading or can we just use gameFetch.loading? */
export const loading = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})
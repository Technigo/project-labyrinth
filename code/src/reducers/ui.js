import { createSlice } from '@reduxjs/toolkit'

// Handles response delay
export const ui = createSlice({
  name: 'ui',
  initialState: {
    loading: false
  },
  reducers: {
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})
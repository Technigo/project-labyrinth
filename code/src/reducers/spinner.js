import { createSlice } from '@reduxjs/toolkit'

export const spinner = createSlice({
  name: 'spinner',
  initialState: {
    isLoading: false
  },
  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload
    }
  }
})
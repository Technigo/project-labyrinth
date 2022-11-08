import { createSlice } from '@reduxjs/toolkit';

export const loading = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false
  },
  reducers: {
    setLoading: (state, action) => {
      // send in payload with true or false and set new loading state
      state.isLoading = action.payload
    }
  }
})
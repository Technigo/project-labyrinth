import { createSlice } from '@reduxjs/toolkit';

export const loading = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false
  },

  reducers: {
    setLoading: (store, action) => {
      // send in payload with true or false and set new loading state
      store.isLoading = action.payload
    }
  }
})
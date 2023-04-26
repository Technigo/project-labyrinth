import { createSlice } from '@reduxjs/toolkit';

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})
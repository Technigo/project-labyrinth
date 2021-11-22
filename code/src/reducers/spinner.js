import { createSlice } from '@reduxjs/toolkit';

export const spinner = createSlice({
  name: 'spinner',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

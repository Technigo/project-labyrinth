import { createSlice } from '@reduxjs/toolkit';

export const loading = createSlice({
  name: 'loading',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

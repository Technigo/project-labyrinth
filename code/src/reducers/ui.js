import { createSlice } from "@reduxjs/toolkit";

export const ui = createSlice({
  name: "ui",
  initialState: {
    loading: true,
    // change error to true to see the error page
    error: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

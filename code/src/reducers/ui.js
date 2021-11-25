import { createSlice } from "@reduxjs/toolkit";

// Loading reducer
export const ui = createSlice({
  name: "ui",
  initialState: {
    loading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});
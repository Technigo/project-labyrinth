import { createSlice } from "@reduxjs/toolkit";

export const ui = createSlice({
  //this reducer shows the loading state
  name: "ui",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
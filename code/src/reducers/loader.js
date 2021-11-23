import { createSlice } from "@reduxjs/toolkit";

//Reducer with the loader

export const loader = createSlice({
  name: "loader",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

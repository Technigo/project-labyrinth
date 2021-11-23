import { createSlice } from "@reduxjs/toolkit";

export const loading = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
  },
});

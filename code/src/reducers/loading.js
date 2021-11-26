import { createSlice } from "@reduxjs/toolkit";

// A reducer which with information from the payload sets if the page is loading or not.
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

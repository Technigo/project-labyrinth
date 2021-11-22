import { createSlice } from "@reduxjs/toolkit"

export const ui = createSlice({
  name: "ui",
  initialState: {
    loading: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

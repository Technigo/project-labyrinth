import { createSlice } from '@reduxjs/toolkit'

const ui = createSlice({
  name: 'ui',
  initialState: {
    loading: false,
    pageNotFound: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setPageNotFound: (state, action) => {
      state.pageNotFound = action.payload
    },
  },
})

export default ui

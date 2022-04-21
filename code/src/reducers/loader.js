import { createSlice } from '@reduxjs/toolkit'

const loader = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
  },
})
export default loader

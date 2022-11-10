import { createSlice } from '@reduxjs/toolkit'

const spinner = createSlice({
  name: 'spinner',
  initialState: {
    isLoading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})
export default spinner;
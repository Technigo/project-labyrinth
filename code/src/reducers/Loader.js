import { createSlice } from '@reduxjs/toolkit'

export const loader = createSlice({  
  name: 'loader',
  initialState: {
    isLoading: false
  },
  reducers: { 
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})
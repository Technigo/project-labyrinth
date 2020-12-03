import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

export const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action) => 
    {
      console.log("Inne i setLoading. Sätter till: " + action.payload)
      state.isLoading = action.payload
    }
  }
})
// The purpose of this reducer is to handle a global "Loading" state variable. When a fetch starts, the isLoading is set to true. When a fetch is completed, isLoading is set to false.

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
      state.isLoading = action.payload
    }
  }
})
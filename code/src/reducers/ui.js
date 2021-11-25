import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    showBeginning: true,
  },
  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload
    }, 
    setNoBeginning : (store, action) => {
      store.showBeginning = action.payload
  },
}})
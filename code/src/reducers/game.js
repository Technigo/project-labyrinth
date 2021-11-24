import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    currentCoordinates: null,
    storeCoordinates: [],
    // loading: false,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setCurrentCoordinates: (state, action) => {
      state.currentCoordinates = action.payload
    },
    setStoreCoordinates: (state, action) => {
      if (state.currentCoordinates) {
        state.storeCoordinates = [...state.storeCoordinates, action.payload]
      }
    },
    // setLoading: (state, action) => {
    //   state.loading = action.payload
    // },
  },
})

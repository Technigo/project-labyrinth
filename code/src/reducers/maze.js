import { createSlice } from '@reduxjs/toolkit'

export const maze = createSlice({
  name: 'maze',
  initialState: {
    coordinates: '',
    description: '',
    actions: [],
    username: null,
    isLoading: false,
    chosenDirection: ''
  },

  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
    setUser: (store, action) => {
      store.username = action.payload
    },
    setDirection: (store, action) => {
      store.chosenDirection = action.payload
    },
    setLocation: (store, action) => {
      const {
        description,
        coordinates,
        actions
      } = action.payload
      store.coordinates = coordinates
      store.description = description
      store.actions = actions
    }
  }
})

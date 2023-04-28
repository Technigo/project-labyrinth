import { createSlice } from '@reduxjs/toolkit'

export const maze = createSlice({
  name: 'maze',
  initialState: {
    coordinates: '',
    description: '',
    actions: [],
    username: '',
    isLoading: false,
    chosenDirection: ''
  },

  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
    setUser: (store, action) => {
      store.username = `${new Date().getTime()}+${action.payload}` // Added time to make the username unique
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
    },
    endGame: (store, action) => {
      store.isGameEnded = action.payload
    }
  }
})

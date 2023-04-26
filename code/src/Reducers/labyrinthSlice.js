import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    userName: '',
    name: '',
    description: '',
    direction: '',
    moves: '',
    history: [],
    loading: false,
    coordinates: ''
  }

  export const labyrinth = createSlice ({
    name: 'labyrinth',
    initialState,
    reducers: {

    setUserName: (store, action) => {
      const { input } = action.payload
      const userId = uuidv4(input);
        store.userName = userId
          store.name = action.payload
    },

    setDescription: (store, action) => {
      store.description = action.payload;
    },

    setMoves: (store, action) => {
      store.moves = action.payload
    },

    setDirection: (store, action) => {
      store.direction = action.payload
      store.history = [...store.history, store.direction]
    },

    setLoading: (store, action) => {
      store.loading = action.payload
    },

    setCoordinates: (store, action) => {
      store.coordinates = action.payload
    },

    restartGame: (store) => {
      store.userName = ''
    }
  }
})

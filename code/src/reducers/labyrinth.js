import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
    coordinates: null,
    description: null,
    direction: null,
    history: [],
    // Changed actions to moves because I think it was getting confused on the other actions name
    moves: null,
    loading: false
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
      console.log(store.username)
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload.coordinates
    },
    setDescription: (store, action) => {
      store.description = action.payload.description
    },
    setDirection: (store, action) => {
      store.direction = action.payload.direction
    },
    // Copied this
    setMoves: (store, action) => {
      if (store.moves) {
        store.history = [...store.history, store.moves]
      }
      store.moves = action.payload.moves
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    }
    /* setPreviousMove: (store, action) => {
      if (store.history.length) {
        store.moves = store.history[store.history.length - 1]
        store.history = store.history.slice(0, store.history.length - 1)
      }
    } */
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username: getState().labyrinth.username })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setCoordinates(data))
        console.log(data)
        dispatch(labyrinth.actions.setDescription(data))
        dispatch(labyrinth.actions.setMoves(data))
      })
      .finally(() => {
        dispatch(labyrinth.actions.setLoading(false))
      })
    console.log('Hey whoa!')
  }
}
import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
    currentPosition: null,
    history: [],
    // Changed actions to moves because I think it was getting confused on the other actions name
    loading: false
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
      console.log(store.username)
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload
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
      .then((swag) => {
        dispatch(labyrinth.actions.setCurrentPosition(swag))
      })
      .finally(() => {
        dispatch(labyrinth.actions.setLoading(false))
      })
    console.log('Hey whoa!')
  }
}
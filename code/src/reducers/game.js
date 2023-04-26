import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    loading: false,
    gameStep: {
      coordinates: '0,0'
    }
  },

  reducers: {
    // an action to save the gameStep to local state
    setGame: (store, action) => {
      store.gameStep = action.payload
    },

    // an action to save the current loading state to global state
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

export const getGameStep = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.username })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(game.actions.setGame(json))
        dispatch(game.actions.setLoading(false))
      })
  }
}
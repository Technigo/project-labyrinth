import { createSlice } from '@reduxjs/tooklit'

const game = createSlice({
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
      store.game = action.payload
    },

    // an action to save the current loading state to global state
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

export const getGameStep = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true))

    /*     (actions.setLoading(true)) */
    fetch('https://labyrinth.technigo.io/start/${getState().name.gameStep}')
      .then((response) => response.json())
      .then((json) => dispatchEvent(game.actions.setGame(json)))
    dispatch(game.actions.setLoading(false))
  }
}

fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: USERNAME
    })
})
  
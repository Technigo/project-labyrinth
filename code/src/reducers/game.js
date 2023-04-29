import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: { username: null, currentLocation: [], loading: false, response: {} },
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload
    },
    setUsername: (state, action) => {
      state.username = `${action.payload} ${Date.now().toString()}` // makes unique username
    },
    setResponse: (state, action) => {
      state.response = action.payload
    }

  }
})

// first thunk: posts username to start the game
export const postUsername = () => {
  return (dispatch, getState) => {
    /* dispatch(ui.actions.setLoading(true)) */
    const username = { username: getState().game.username }
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(username)
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentLocation(json.coordinates));
        dispatch(game.actions.setResponse(json))
      })
    /* Found this syntax in other projects - slightly different, but does the same
      const options = {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(username)
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((json) => dispatch(game.actions.setCurrentLocation(json))) */
    /* .finally(() => dispatch(ui.actions.setLoading(false))) */
  }
}

export const postAction = (action, direction) => {
  return (dispatch, getState) => {
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        type: action,
        direction
      })

    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setResponse(json))
        console.log(`response: ${json}`)
      })
  }
}
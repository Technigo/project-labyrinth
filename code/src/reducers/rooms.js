import { createSlice } from '@reduxjs/toolkit'
import { loader } from './loader'

const START_URL = "https://wk16-backend.herokuapp.com/start"
const ACTION_URL = "https://wk16-backend.herokuapp.com/action"

const initialState = {
  username: "",
  gameState: {
    description: "",
    coordinates: "",
    actions: []
  }
}

export const rooms = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    // Sets the username to the payload sent in (from CreateUsername.js)
    setUsername: (state, action) => {
      state.username = action.payload
      console.log("Username is: "  + action.payload)
    },

    setGameState: (state, action) => {
      const currentGameState = action.payload
      state.gameState = currentGameState
    },
  }
})

// THUNKS HERE
// This function starts the game, by doing the first fetch from the API.
export const startGame = (universalUsername) => {
  return (dispatch) => {
    dispatch(loader.actions.setLoading(true))
    // Do the fetch, and pass the response (data) to setGameState. 
    fetch(START_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: universalUsername
      })
    })
      .then(response => response.json())
      .then(data => {
        // Pass "data" (the response from the API containing the coordinates, direction, etc) to the Game State.
        dispatch(rooms.actions.setGameState(data))
        dispatch(loader.actions.setLoading(false))
      })
  }
}

// This function is called on each click of a "Direction" button – i.e. the buttons in each action box with North, East, West or South.
export const continueGame = (direction, universalUsername) => {
  return (dispatch) => {
    dispatch(loader.actions.setLoading(true))
    fetch(ACTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: universalUsername,
        type: "move",
        direction
      })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(rooms.actions.setGameState(data))
        dispatch(loader.actions.setLoading(false))
      })
  }
}
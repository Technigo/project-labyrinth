import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username:"", 
  response:
    {
      "coordinates": "0",
      "description": "",
      "actions": [
          {
              "type": "",
              "direction": "",
              "description": ""
          }
      ]
  }
}

export const Game = createSlice(
  {
    name: 'game',
    initialState,
    reducers: {
      setUsername: (store, action) => {
        store.username=action.payload
      },
      nextStep:(store, action) => {
        store.response = action.payload
      },
      
    }
  }
)

// thunk to handle start API
export const startGame = () => {
  return (dispatch, getState) => (
fetch('https://labyrinth.technigo.io/start', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: getState().game.username
  })
})
.then((response) => response.json())
.then((json) => {
  // get the data from the api - save it in global state
  dispatch(Game.actions.nextStep(json))})
 .catch((error) => console.error(error))

)
}

//thunk to handle action API
export const getStory = (direction) => {

  return (dispatch, getState) => (
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        "type": "move",
        "direction":direction,
      })
    })
    .then((response) => response.json())
    .then((json) => {
      // get the data from the api - save it in global state
      dispatch(Game.actions.nextStep(json))})
    .catch((error) => console.error(error))

  )
}
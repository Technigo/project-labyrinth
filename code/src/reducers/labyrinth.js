/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice ({
  name: 'labyrinth',
  initialState: {
    username: '',
    actions: []
    // gameStep: where in the game the user is. {
    // coordinates:"0,0"}    
  },

    // history: ["0,0", "0,2", ]

    // an action to save the category (choice) to global state. Dynamically chosen by user.   
    reducers: {
      setUserName: (state, action) => {
        state.username = action.payload
      },
      setCoordinates: (state, action) => {
        state.coordinates = action.payload
      },
      setDescription: (state, action) => {
        state.description = action.payload
      },
      setActionOption: (state, action) => {
        state.actions = action.payload  
    }
  }
});  

export default labyrinth;

// a thunk to handle api call. Can be reused. startGame . Response back (coordinates, description) Actions are in an array. 
export const getLabyrinth = () => {
  return (dispatch, getState) => {
// dispatch(loading.actions.setLoading(true))

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username: getState().labyrinth.username })
}

    fetch(`https://labyrinth.technigo.io/start`, options)
      .then((response) => response.json())
      .then((gameData) => {
        console.log(gameData)
        dispatch(labyrinth.actions.setCoordinates(gameData.coordinates))
        dispatch(labyrinth.actions.setDescription(gameData.description))
        dispatch(labyrinth.actions.setActionOption(gameData.actions))
        // dispatch(loading.actions.setLoading(false))
      })
  }
}

export const generateOptions = (type, direction) => {
  return (dispatch, getState) => {
   // dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      })
    }
    fetch(`https://labyrinth.technigo.io/action`, options)
      .then((respons) => respons.json())
      .then((gameData) => {
        dispatch(labyrinth.actions.setCoordinates(gameData.coordinates))
        dispatch(labyrinth.actions.setDescription(gameData.description))
        dispatch(labyrinth.actions.setActionOption(gameData.actions))
        // dispatch(loading.actions.setLoading(false))
      })
  }
}

//${getState().jokes.category}
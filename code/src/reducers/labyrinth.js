/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice ({
  name: 'labyrinth',
  initialState: {
    username: '',
    // gameStep: where in the game the user is. {
    // coordinates:"0,0"}    
  },

    // history: ["0,0", "0,2", ]

    reducers: {
      setLabyrinth:(store, action) => {
        store.labyrinth = action.payload
      },

    // an action to save the category (choice) to global state. Dynamically chosen by user. GET/POST REQUEST. The information provided from the user. Ex. go North.
      setUserName: (store, action) => {
        store.username = action.payload
      },
      setCoordinates: (store, action) => {
        store.coordinates = action.payload
      },
      setDescription: (store, action) => {
        store.description = action.payload
      },
      setActionOption: (store, action) => {
        store.actions = action.payload  
    }
  }
});  

//const {category, setUp, delivery} = action.payload
//store.joke = [...store.joke, category, setUp, delivery]

export default labyrinth;

// a thunk to handle api call. Can be reused. startGame . Response back (coordinates, description) Actions are in an array. 
export const getLabyrinth = () => {
  return (dispatch, getState) => {
dispatch(loading.actions.setLoading(true))
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
        dispatch(labyrinth.actions.setActionOption(data.actions))
        dispatch(loading.actions.setLoading(false))
      })
  }
}

//${getState().jokes.category}
import { createSlice } from '@reduxjs/toolkit';

const jokes = createSlice ({
  name: 'jokes',
  initialState: {
    username: '',
    // gameStep: where in the game the user is. {
    // coordinates:"0,0"}    
  },

    // history: ["0,0", "0,2", ]

    reducers: {
      setJoke:(store, action) => {
        store.joke = action.payload
      },

    // an action to save the category (choice) to global state. Dynamically chosen by user. GET/POST REQUEST. The information provided from the user. Ex. go North.
      setCategory: (store, action) => {
        store.category = action.payload
    }
  }
});  

//const {category, setUp, delivery} = action.payload
//store.joke = [...store.joke, category, setUp, delivery]

export default jokes;

// a thunk to handle api call. Can be reused. startGame . Response back (coordinates, description) Actions are in an array. 
export const getJoke = () => {
  return (dispatch, getState) => {
    fetch(`https://labyrinth.technigo.io/${getState().jokes.category}`)
      .then((response) => response.json())
      .then((joke) => dispatch(jokes.actions.setJoke(joke)))
  }
}
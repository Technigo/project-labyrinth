import { createSlice } from '@reduxjs/toolkit';

const jokes = createSlice({
  name: 'jokes',
  initialState: {
    username: ''
    gameStep: {
        coordinates: "0,0",
    },
    history: 
    joke: {},
    category: ''
  },
  reducers: {
    setJoke: (store, action) => {
      store.joke = action.payload
    }
  }
})

export default jokes;

const getJoke = () => {
  return (dispatch, getState) => {
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then((response) => response.json())
      .then((joke) => dispatch(jokes.actions.setJoke(joke)))
  }
}

setJoke = () => {

}
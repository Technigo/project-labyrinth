/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const jokes = createSlice({
  name: 'jokes',
  initialState: { // Bestäm om vi vill ha initial state eller inte
    category: ''
  },
  reducers: {
    setJoke: (store, action) => {
      // const {category, setup, delivery} = action.payload om man vill hämta specifika saker från API:n (funkade ej)
      store.joke = action.payload
      console.log('setting joke', store.joke)
    }
    // an action to save the joke to global state
    // an action to save the category to global state
    setCategory: (store, action) => {
        store.category = action.payload
        console.log(store.category)
    }
  }
});

export default jokes;

// a thunk to handle api call
export const getJoke = () => {
  return (dispatch, getState) => {
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then((response) => response.json())
      .then((potato) => dispatch(jokes.actions.setJoke(potato)))
  }
}

// import { createSlice } from '@reduxjs/toolkit';

// const jokes = createSlice({
//   name: 'jokes',
//   initialState: {
//     joke: {},
//     category: ''
//   },
//   reducers: {
//     setJoke:(store, action) => {
//       store.joke = action.payload
//     },
//    // an action to save the category to global state
//     setCategory: (store, action) => {
//       store.category = action.payload
//     }
//   }
// });

// export default jokes;

// // a thunk to handle api call
// export const getJoke = () => {
//   return (dispatch, getState) => {
//     fetch(`https://v2.jokeapi.dev/joke/${getState().jokes.category}`)
//       .then((response) => response.json())
//       .then((potato) => dispatch(jokes.actions.setJoke(potato)))
//   }
// }

// name: 
// initial state:
//  username:
//  gameStep:
//    coordinates:
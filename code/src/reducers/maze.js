import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: ''
}

export const maze = createSlice({
  name: 'maze',
  initialState,
  reducers: {

    storeUsername: (store, action) => {
      store.username = action.payload
    },

    postUsername: (store) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: store.username
        })
      }
      fetch('https://labyrinth.technigo.io/start', options)
        .then((response) => response.json())
        .then((data) => console.log(data))
    },

    moveForward: () => {
      // take user response from the button and post to api
      // fetch api response
    }
  }
})
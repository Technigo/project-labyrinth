import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    coordinates: '',
    description: '',
    actions: [],
    loading: false
  },

  reducers: {
    storeUsername: (store, action) => {
      store.username = `${uniqid()}+${action.payload}}`
    },
    storeCoordinates: (store, action) => {
      store.coordinates = action.payload
    },
    storeDescription: (store, action) => {
      store.description = action.payload
    },
    storeActions: (store, action) => {
      store.actions = action.payload
    }
  }
})
// first thunk
export const startLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username
      })
    };
    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setPosition(data))
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  }
}
// second thunk
export const nextMove = (direction) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: 'move',
        direction
      })
    };
    fetch('https://labyrinth.technigo.io/action', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setPosition(data))
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  }
}

// uniqid is a package that provides a simple function to generate
// unique IDs based on the current time and a random number.
// Overall, uniqid is a simple and lightweight package that can
//  be useful when you need to generate unique IDs in your project.
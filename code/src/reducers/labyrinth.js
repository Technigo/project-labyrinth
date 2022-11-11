/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    coordinates: '',
    description: '',
    actions: [],
    username: null,
    isLoading: false,
    chosenDirection: ''
  },
  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setUser: (store, action) => {
      // attaching dateTime to username to make it more unique
      store.username = `${new Date().getTime()}+${action.payload}`
    },
    setDirection: (store, action) => {
      // chosenDirection is set depending on what direction you chose to go
      store.chosenDirection = action.payload;
    },
    setLocation: (store, action) => {
      const {
        description,
        coordinates,
        actions
      } = action.payload;
      store.coordinates = coordinates;
      store.description = description;
      store.actions = actions;
    }
  }
});

export default labyrinth;

export const startGame = () => {
  return (dispatch, getState) => {
    // sets isLoading to true while waiting for respons from api.
    /// When fetch is done isLoading is set to false.
    dispatch(labyrinth.actions.setLoading(true))
    fetch(
      'https://labyrinth.technigo.io/start',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: getState().labyrinth.username })
      }
    )
      .then((res) => res.json())
      // update initial state with data fetched from the api
      .then((location) => dispatch(labyrinth.actions.setLocation({
        description: location.description,
        coordinates: location.coordinates,
        actions: location.actions
      })))
      .catch((error) => console.error(error))
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  }
};

export const moveOn = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    fetch(
      'https://labyrinth.technigo.io/action',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            username: getState().labyrinth.username,
            type: 'move',
            direction: getState().labyrinth.chosenDirection
          }
        )
      }
    )
      .then((res) => res.json())
      // update initial state with data fetched from the api
      .then((location) => dispatch(labyrinth.actions.setLocation({
        description: location.description,
        coordinates: location.coordinates,
        actions: location.actions
      })))
      .catch((error) => console.error(error))
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  }
}

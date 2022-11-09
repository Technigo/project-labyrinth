/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    coordinates: '',
    description: '',
    actions: [],
    username: null,
    isLoading: false
  },
  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setUser: (store, action) => {
      store.username = `${new Date().getTime()}+${action.payload}`
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
      .finally(dispatch(labyrinth.actions.setLoading(false)))
  }
};

export default labyrinth;

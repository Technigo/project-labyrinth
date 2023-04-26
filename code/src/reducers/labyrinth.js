import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    progress: {},
    history: [],
    moves: '',
    coordinates: '',
    description: '',

    // need this to store how people have moved in the labyrinth so they can go back steps
    isLoading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
      console.log('username:', action.payload)
    },
    setProgress: (store, action) => {
      store.progress = action.payload
      console.log('progress:', action.payload)
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
      console.log('isLoading:', action.payload)
    },
    setDescription: (store, action) => {
      store.description = action.payload
      console.log('description:', action.payload)
    },
    setMoves: (store, action) => {
      store.setMoves = action.payload
      console.log('moves:', action.payload)
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload
      console.log('coordinates:', action.payload)
    },
    setDirection: (store, action) => {
      store.direction = action.payload
      console.log('direction:', action.payload)
    }
  }
});

// a thunk to handle the API request
// two API requests one for the startLabyrinth and one for all the rest
export const startLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setIsLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json.description));
        dispatch(labyrinth.actions.setMoves(json.actions));
        dispatch(labyrinth.actions.setCoordinates(json.coordinates))
      })
      .finally(() => dispatch(ui.actions.setIsLoading(false)))
  };
};

export const labyrinthProgress = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setIsLoading(true))
    const optionsProgress = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username, type, direction })
    };

    fetch('https://labyrinth.technigo.io/action', optionsProgress)
      .then((response) => response.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json.description));
        dispatch(labyrinth.actions.setMoves(json.actions));
        dispatch(labyrinth.actions.setCoordinates(json.coordinates))
        dispatch(labyrinth.actions.setDirection(json.actions.direction))
      })
      .finally(() => dispatch(ui.actions.setIsLoading(false)))
  };
}
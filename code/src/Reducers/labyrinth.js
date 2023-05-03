// Import necessary libraries
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Set initial state for the store
const initialState = {
  userName: '',
  name: '',
  description: '',
  direction: '',
  moves: '',
  history: [],
  loading: false,
  coordinates: ''
};

// Create Redux slice
export const labyrinthMango = createSlice({
  name: 'labyrinthMango',
  initialState,
  reducers: {
    // Set user name and generate unique user ID
    setUserName: (store, action) => {
      const input = action.payload;
      const userId = uuidv4(input);
      store.userName = userId;
      store.name = input;
    },
    // Set description in the store
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    // Set moves in the store
    setMoves: (store, action) => {
      store.moves = action.payload
    },
    // Set direction and update history in the store
    setDirection: (store, action) => {
      store.direction = action.payload
      store.history = [...store.history, store.direction]
    },
    // Set loading state in the store
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    // Set coordinates in the store
    setCoordinates: (store, action) => {
      store.coordinates = action.payload
    },
    // Reset game
    restartGame: () => {
      return initialState;
    }
  }
});

// Thunk to start the game
export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(labyrinthMango.actions.setLoading(true));
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinthMango.userName })
    };
    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinthMango.actions.setDescription(json.description));
        dispatch(labyrinthMango.actions.setMoves(json.actions));
        dispatch(labyrinthMango.actions.setCoordinates(json.coordinates));
      })
      .finally(() => dispatch(labyrinthMango.actions.setLoading(false)));
  };
};

// Thunk to continue the game
export const continueGame = () => {
  return (dispatch, getState) => {
    dispatch(labyrinthMango.actions.setLoading(true));
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinthMango.userName,
        type: 'move',
        direction: getState().labyrinthMango.direction
      })
    };
    fetch('https://labyrinth.technigo.io/action', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinthMango.actions.setDescription(json.description));
        dispatch(labyrinthMango.actions.setMoves(json.actions));
        dispatch(labyrinthMango.actions.setCoordinates(json.coordinates));
        dispatch(labyrinthMango.actions.setDirection(json.actions.direction));
      })
      .finally(() => dispatch(labyrinthMango.actions.setLoading(false)));
  };
};
/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  userName: '',
  name: '',
  description: '',
  direction: '',
  moves: '',
  history: [],
  loading: false,
  coordinates: ''
}

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {

    setUserName: (store, action) => {
      const { input } = action.payload
      const userId = uuidv4(input);
      store.userName = userId
      store.name = action.payload
    },

    setDescription: (store, action) => {
      store.description = action.payload;
    },

    setMoves: (store, action) => {
      store.moves = action.payload
    },

    setDirection: (store, action) => {
      store.direction = action.payload
      store.history = [...store.history, store.direction]
    },

    setLoading: (store, action) => {
      store.loading = action.payload
    },

    setCoordinates: (store, action) => {
      store.coordinates = action.payload
    },

    restartGame: (store) => {
      store.userName = ''
    }
  }
})
export const startTheGame = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.userName })
    };

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json.description));
        dispatch(labyrinth.actions.setMoves(json.actions));
        dispatch(labyrinth.actions.setCoordinates(json.coordinates))
      })
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  };
}

export const continueGame = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.userName,
        type: 'move',
        direction: getState().labyrinth.direction })
    };

    fetch('https://labyrinth.technigo.io/action', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json.description));
        dispatch(labyrinth.actions.setMoves(json.actions));
        dispatch(labyrinth.actions.setCoordinates(json.coordinates))
        dispatch(labyrinth.actions.setDirection(json.actions.direction))
      })
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  };
}
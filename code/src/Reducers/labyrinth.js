import { createSlice } from '@reduxjs/toolkit';
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

export const labyrinthMango = createSlice({
  name: 'labyrinthMango',
  initialState,
  reducers: {

    setUserName: (store, action) => {
      const input = action.payload;
      const userId = uuidv4(input);
      store.userName = userId;
      store.name = input;
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

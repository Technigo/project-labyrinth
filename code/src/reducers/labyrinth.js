import { createSlice } from '@reduxjs/toolkit';
import ui from './ui';

const initialState = {
  username: null,
  position: null,
  actions: '',
  history: []
}

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,
  // ska det vara username:TechnigoPlayer
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setPosition: (store, action) => {
      store.position = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload
    },
    restartGame: () => {
      return initialState;
    }
  }
});

// Thunk 1
export const fetchLabyrinthOne = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setPosition(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk 2 with SetLoading.

export const fetchLabyrinthTwo = ({ move = 'move', direction }) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: move,
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setPosition(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// export default labyrinth;


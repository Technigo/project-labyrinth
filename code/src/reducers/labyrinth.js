import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    location: [],
    isLoading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setLocation: (store, action) => {
      store.location = action.payload;
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    }
  }
})

export default labyrinth;

export const generateLabyrinth = () => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('generateLabyrinth', data)
        dispatch(labyrinth.actions.setLocation(data))
      })
      .finally(dispatch(labyrinth.actions.setLoading(false)))
  }
}

export const GameNextFetch = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setLocation(data));
        dispatch(labyrinth.actions.setLoading(false));
      });
  };
};
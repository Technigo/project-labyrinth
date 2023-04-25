import { createSlice } from '@reduxjs/toolkit'
import { batch } from 'react-redux';

const fetchGame = createSlice({
  name: 'fetchGame',
  initialState: {
    userName: null,
    description: '',
    actions: [],
    loading: false,
    coordinates: ''
  },
  reducers: {
    setName: (store, action) => {
      store.userName = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    }
  }
});

export const fetchOne = (userName) => {
  return (dispatch) => {
    dispatch(fetchGame.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userName })

    })
      .then((res) => res.json())
      .then((data) => {
        batch(() => {
          dispatch(fetchGame.actions.setDescription(data.description));
          dispatch(fetchGame.actions.setActions(data.actions));
          dispatch(fetchGame.actions.setCoordinates(data.cordinates));
          dispatch(fetchGame.actions.setLoading(false));
        })
      })
  }
}

export const fetchTwo = (userName, direction) => {
  return (dispatch) => {
    dispatch(fetchGame.actions.setLoading(true));
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName,
        type: 'move',
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        batch(() => {
          dispatch(fetchGame.actions.setDescription(data.description));
          dispatch(fetchGame.actions.setActions(data.actions));
          dispatch(fetchGame.actions.setCoordinates(data.coordinates));
          dispatch(fetchGame.actions.setLoading(false));
        });
      });
  };
};
export default fetchGame;
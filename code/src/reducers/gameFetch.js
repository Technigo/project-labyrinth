import { createSlice } from '@reduxjs/toolkit'
import { batch } from 'react-redux';

export const gameFetch = createSlice({
  name: 'gameFetch',
  initialState: {
    userName: '',
    description: '',
    actions: [],
    loading: false,
    coordinates: ''
  },
  reducers: {
    setName: (store, action) => {
      console.log(action.payload);
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

export const fetchOne = () => {
  return (dispatch, getState) => {
    dispatch(gameFetch.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().gameFetch.userName })

    })
      .then((res) => res.json())
      .then((data) => {
        batch(() => {
          dispatch(gameFetch.actions.setDescription(data.description));
          dispatch(gameFetch.actions.setActions(data.actions));
          dispatch(gameFetch.actions.setCoordinates(data.cordinates));
          dispatch(gameFetch.actions.setLoading(false));
        })
      })
  }
}

export const fetchTwo = (direction) => {
  return (dispatch, getState) => {
    dispatch(gameFetch.actions.setLoading(true));
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().gameFetch.userName,
        type: 'move',
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        batch(() => {
          dispatch(gameFetch.actions.setDescription(data.description));
          dispatch(gameFetch.actions.setActions(data.actions));
          dispatch(gameFetch.actions.setCoordinates(data.coordinates));
          dispatch(gameFetch.actions.setLoading(false));
        });
      });
  };
};
export default gameFetch;
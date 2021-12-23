import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  username: null,
  currentPosition: null,
  storeCoordinates: [],
  loading: false
};

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },

    setStoreCoordinates: (state, action) => {
      if (state.currentPosition) {
        state.storeCoordinates = [...state.storeCoordinates, action.payload];
      }
    },

    setLoading: (store, action) => {
      store.loading = action.payload;
    },

    restart: () => {
      return initialState;
    }
  }
});

export const fetchStart = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username })
    })
      .then((res) => res.json())
      .then((json) => dispatch(labyrinth.actions.setCurrentPosition(json)))
      .finally(() => dispatch(labyrinth.actions.setLoading(false)));
  };
};
// to make the map work... insert a line store coordinates here.
export const fetchContinue = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setCurrentPosition(data));
        dispatch(labyrinth.actions.setStoreCoordinates(data));
      })
      .finally(() => dispatch(labyrinth.actions.setLoading(false)));
  };
};

import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';

export const start = createSlice({
  name: 'start',
  initialState: {
    username: null,
    response: {},
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setResponse: (store, action) => {
      store.response = action.payload;
    },
  },
});

export const fetchStart = () => {
  return (dispatch, getStore) => {
    //   dispatch(ui.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: getStore().start.username }),
    })
      .then(res => res.json())
      .then(json => {
        dispatch(start.actions.setResponse(json));
        //      dispatch(ui.action.setLoading(false));
      });
  };
};

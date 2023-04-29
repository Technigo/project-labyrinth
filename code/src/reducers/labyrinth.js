import { createSlice } from '@reduxjs/toolkit';
import ui from './ui';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    stage: '',
    history: []
  },
  reducers: {
    setUser: (store, action) => {
      store.username = `${new Date().getTime()} ${action.payload}`;
    },
    setStage: (store, action) => {
      if (store.stage !== '') {
        store.history.push(store.stage);
      }
      store.stage = action.payload;
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    }
  }
});

export const startLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    const API_URL = 'https://labyrinth.technigo.io/start';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setStage(data));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

export const nextStage = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    const API_URL_ACTION = 'https://labyrinth.technigo.io/action';
    const optionsAction = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      })
    };
    fetch(API_URL_ACTION, optionsAction)
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setStage(data));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

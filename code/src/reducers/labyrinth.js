import { createSlice } from '@reduxjs/toolkit'
import ui from './ui';

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    stage: []
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload
    },
    setStage: (store, action) => {
      store.stage = action.payload
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    }
  }
});

export default labyrinth;

export const startLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    const API_URL = 'https://labyrinth.technigo.io/start'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    }
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        console.log('startLabyrinth', data)
        dispatch(labyrinth.actions.setStage(data))
      })
      .finally(dispatch(ui.actions.setLoading(false)))
  }
};

export const nextStage = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    const API_URL_ACTION = 'https://labyrinth.technigo.io/action'
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
    }
    fetch(API_URL_ACTION, optionsAction)
      .then((res) => res.json())
      .then((data) => {
        console.log('nextStage', data)
        dispatch(labyrinth.actions.setStage(data))
      })
      .finally(dispatch(ui.actions.setLoading(false)))
  }
};
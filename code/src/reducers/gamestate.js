import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'

const gamestate = createSlice({
  name: 'gamestate',
  initialState: {
    username: '',
    nextQuestion: [],
    all: [],
    history: []
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setHistory: (store, action) => {
      store.history = action.payload;
    },
    setNextQuestion: (store, action) => {
      store.nextQuestion = action.payload;
    }
  }
});

export default gamestate;

export const generateGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().gamestate.username
      })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => {
        dispatch(gamestate.actions.setNextQuestion(json))
        dispatch(ui.actions.setLoading(false))
      })
  };
};

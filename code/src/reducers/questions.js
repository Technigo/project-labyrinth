import { createSlice } from '@reduxjs/toolkit';

const questions = createSlice({
  name: 'questions',
  initialState: {
    username: '',
    gameQuestion: ''
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setGameQuestion: (store, action) => {
      store.gameQuestion = action.payload;
    }
  }
});

export default questions;

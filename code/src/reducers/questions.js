import { createSlice } from '@reduxjs/toolkit';

export const questions = createSlice({
  name: 'questions',
  initialState: {
    username: '',
    gameQuestion: [],
    isLoading: false,
    history: []
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setGameQuestion: (store, action) => {
      store.gameQuestion = action.payload;
      // console.log('Game Question');
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setHistory: (store, action) => {
      store.history = action.payload;
    }
  }
});
export const generateQuestions = (direction) => {
  if (direction) {
    return (dispatch, getState) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: getState().questions.username,
          type: 'move',
          direction
        })
      };
      fetch('https://labyrinth.technigo.io/start', options)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then((data) => {
          dispatch(questions.actions.setGameQuestion(data));
        });
    };
  } else {
    return(dispatch, getState)=>{

    }
  }
};

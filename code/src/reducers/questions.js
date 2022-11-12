import { createSlice } from '@reduxjs/toolkit';

export const questions = createSlice({
  name: 'questions',
  initialState: {
    username: '',
    gameQuestion: {},
    isLoading: false,
    history: [],
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setGameQuestion: (store, action) => {
      console.log('action', action);
      store.gameQuestion = action.payload;
      console.log('Game Question');
      return store;
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    restart: () => {
      return initialState;
    },
  },
});

export const generateQuestions = () => {
  return (dispatch, getState) => {
    dispatch(questions.actions.setLoading(true));
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: getState().questions.username,
      }),
    };
    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => dispatch(questions.actions.setGameQuestion(data)))
      .finally(() => dispatch(questions.actions.setLoading(false)));
  };
};

export const gameProgress = (type, direction) => {
  return (dispatch, getState) => {
    const optionsAction = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: getState().questions.username,
        type,
        direction,
      }),
    };

    fetch('https://labyrinth.technigo.io/action', optionsAction)
      .then((res) => res.json())
      .then((data) => {
        dispatch(questions.actions.setGameQuestion(data));
      });
  };
};

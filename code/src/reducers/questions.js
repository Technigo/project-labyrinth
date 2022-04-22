import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const initialState = {
  username: null,
  question: {},
  moves: [],
};

export const questions = createSlice({
  name: 'questions',
  initialState: {
    username: null,
    gameQuestion: '',
  },

  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setGameQuestion: (store, action) => {
      store.gameQuestion = action.payload;
    },
    restart: () => {
      return initialState;
    },
  },
});

export const generateQuestion = (direction) => {
  if (direction) {
    return (dispatch, getState) => {
      dispatch(ui.actions.setLoading(true));
      fetch(`https://labyrinth-technigo.herokuapp.com/action`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: getState().questions.username,
          type: 'move',
          direction: direction,
        }),
      })
        .then((res) => res.json())
        .then(
          (question) => dispatch(questions.actions.setGameQuestion(question)),
          setTimeout(() => dispatch(ui.actions.setLoading(false)), 1000)
        );
    };
  } else {
    return (dispatch, getState) => {
      dispatch(ui.actions.setLoading(true));
      fetch(
        `https://labyrinth-technigo.herokuapp.com/start?username=${
          getState().questions.username
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: getState().questions.username,
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (question) => dispatch(questions.actions.setGameQuestion(question)),
          setTimeout(() => dispatch(ui.actions.setLoading(false)), 1000)
        );
    };
  }
};

import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

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
  },
});

export const generateQuestion = (direction) => {
  return (dispatch, getState) => {
    if (direction) {
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
          dispatch(ui.actions.setLoading(false))
        );
    } else {
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
          dispatch(ui.actions.setLoading(false))
        );
    }
  };
};

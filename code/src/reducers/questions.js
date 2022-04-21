import { createSlice } from '@reduxjs/toolkit';

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
        .then((question) =>
          dispatch(questions.actions.setGameQuestion(question))
        );
    } else {
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
        .then((question) =>
          dispatch(questions.actions.setGameQuestion(question))
        );
    }
  };
};

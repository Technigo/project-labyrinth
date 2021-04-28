import { createSlice } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui';

export const game = createSlice({
    name: 'game',
    initialState: {
        userName: null,
        question: null,
        history: []
    },
    reducers: {
        setUserName: (store, action) => {
          store.userName = action.payload;
        },
        addDirection: (store, action) => {
          store.history = [...store.history, action.payload];
        },
        setQuestion: (store, action) => {
          store.question = action.payload;
        },
    }
})

export const generateQuestion = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
          fetch(`https://wk16-backend.herokuapp.com/start`, {
              method: 'POST',
              body: JSON.stringify({ username: getState().game.userName }),
              headers: {
                  'Content-Type': 'application/json'
              },
          })
          .then(res => res.json())
          .then((question) => {
            console.log(question.coordinates);
            dispatch(game.actions.setQuestion(question))
            dispatch(ui.actions.setLoading(false));
          })
  }};

  export const nextQuestion = (userName, direction) => {
    return (dispatch) => {
      dispatch(ui.actions.setLoading(true));
      fetch('https://wk16-backend.herokuapp.com/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify({
          username: userName,
          type: 'move',
          direction,
        }),
      })
        .then(res => res.json())
        .then((json) => {
          console.log("https://wk16-backend.herokuapp.com/action")
          dispatch(game.actions.addDirection(direction));
          dispatch(game.actions.setQuestion(json));
          dispatch(ui.actions.setLoading(false));
        })
    }
  }
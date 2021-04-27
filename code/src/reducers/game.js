import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
    name: 'game',
    initialState: {
        userName: null,
        question: {},
    },
    reducers: {
        setUserName: (store, action) => {
            store.userName = action.payload;
        },
        setQuestion: (store, action) => {
            store.question = action.payload;
        },
    }
})

export const generateQuestion = () => {
  return (dispatch, getState) => {

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
          })
  }};

  export const nextQuestion = (userName, direction) => {
    return (dispatch) => {
  
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
          dispatch(game.actions.setQuestion(json));
        })
    }
  }
import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
    name: 'game',
    initialState: {
        userName: null,
        question: null,
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
          .then((json) => {
            console.log(json.description);
            // dispatch(game.actions.setQuestion(question))
          })
      
  }}

  
import { createSlice } from '@reduxjs/toolkit';

 const questions = createSlice({
	name: 'questions',
	initialState: {
			userName: null,
			gameStatus: undefined,
      		loading: false,
          history: []
			
	},
	reducers: {
			setUserName: (store, action) => {
					store.userName = action.payload;
			},
			setGameStatus: (store, action) => {
        if (store.gameStatus) {
				  store.history = [...store.history, store.gameStatus]
      		}
          store.gameStatus =action.payload;
      },
      setPreviousGameStatus: (store) => {
        if (store.history.length) {
          store.gameStatus = store.history[store.history.length - 1]
          store.history = store.history.slice(0, store.history.length -1)
        }
      },
      setLoading: (store, action) => {
        store.loading = action.payload
      }
    }
  })

 export const initiateGame = (inputValue) => {
	return (dispatch) => {
    dispatch(questions.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: inputValue }),
    })
       .then(response => response.json())
	     .then(json => {
				  dispatch(questions.actions.setGameStatus(json));
			 })
		.finally(() => dispatch(questions.actions.setLoading(false)))
    }
 }

 export const generateNextQuestion = (userName, direction) => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName, type: "move", direction: direction }),
    })
      .then(response => response.json())
      .then(json => {
        dispatch(questions.actions.setGameStatus(json));
      })
			
  }
}

export default questions


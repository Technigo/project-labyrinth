import { createSlice } from '@reduxjs/toolkit';

 const questions = createSlice({
	name: 'questions',
	initialState: {
			userName: null,
			gameStatus: undefined,
      		loading: false
			
	},
	reducers: {
			setUserName: (store, action) => {
					store.userName = action.payload;
			},
			setGameStatus: (store, action) => {
				  store.gameStatus = action.payload;
      		},
      setLoading: (store, action) => {
        store.loading = action.payload
      }
    }
  })
//				if (store.question) {
//					store.history = [...store.history, store.question];
//				}
//				store.question = action.payload;
//			},
//			setPreviousQuestion: (store, action) => {
//				if (store.history.length) {
//					store.question = store.history[store.history.length - 1];
//					store.history = store.history.slice(0, store.history.length - 1);
//				}
//	   }},
//	    setError: (store, action) => {
//		store.error = action.payload;
//	  },
//	    setLoading: (store, action) => {
//		store.loading = action.payload;
//	 }

//	 })


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


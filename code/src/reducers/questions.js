import { createSlice } from '@reduxjs/toolkit';

export const questions = createSlice({
	name: 'questions',
	initialState: {
			username: null,
			gamestatus: undefined
			
	},
	reducers: {
			setUsername: (store, action) => {
					store.userName = action.payload;
			},
			setGameStatus: (store, action) => {
					store.gameStatus = action.payload;
			}
	}
})


 export const initiateGame = (globalUsername) => {
	return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: globalUsername }),
    })
       .then(response => response.json())
	   .then(json => {
				 dispatch(questions.actions.setGameStatus(json));
			 })
  
  }
}
console.log(questions)
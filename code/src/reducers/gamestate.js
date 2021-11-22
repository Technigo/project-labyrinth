// import { createSlice } from '@reduxjs/toolkit';
// import { ui } from 'reducers/ui';

// //initial state - when game starts
// const initialState = {
//   username: '',
//   gameStatus: {},
//   history: []
// };

// export const gamestate = createSlice({
//   name: 'gameState',
//   initialState,
//   reducers: {
//     setUsername: (state, action) => {
//       state.username = action.payload; //username property 
//     }
//   }
// });

// export const fetchGameInstructions = () => {
//   return (dispatch) => {
//     dispatch(ui.actions.setLoading(true));
//     fetch("https://wk16-backend.herokuapp.com/start")
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(gamestate.actions.setGameStatus(json));
//         dispatch(ui.actions.setLoading(false))
//       });
//   };
// };
import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const game = createSlice({
    name: 'game'
    initialState: {
    all: []
    },

    reducers: {
        setGame: (state, action) => {
        State.all = action.payload
        }
    }
})

export const fetchGame = () => {
    returns (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch()
        .then((res) => res.json())
        .then ((json) => {
            dispatch(game.actions.setGame(json))
            dispatch(ui.actions.setLoading(false)
        }
    }

    export default game;

// const game = createSlice({
//     name: 'game',
//     initialState: {
//         username: null,
//         gameState: null,
//         history: [],
//     },
//     reducers: {
//         setUserName: (store, action) => {
//             store.username = action.payload;
//         setGameStatus: (store, action) => {
//             if (store.maze) {
//                 store.history.push(store.maze);
//             }
//             store.maze = action.payload;
//         },
//         setPreviousMaze: (store, action) => {
//             if (store.history.length) {
//                 store.maze = store.history[store.history.length - 1];
//                 store.history.splice(store.history.length - 1, 1);
//             }
//         },
//         },
//     },
// });


// export const generateMaze = () => {

//     return (dispatch, getState) => {
//        dispatch(ui.actions.isLoading(true));
//         const options = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ username: getState().game.username }),
//         };
//         fetch("https://labyrinth-technigo.herokuapp.com/start", options)
//             .then(res => res.json())
//             .then(maze => dispatch(game.actions.setMaze(maze)));
//         dispatch(game.actions.setAuthor(true)),
//             dispatch(game.actions.isLoading(false))
//     },
//         export const directionAnswer = () => {
//             return (dispatch, getState) => {
//                 dispatch(ui.actions.setLoading(true));
//                 const options = {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({
//                         username: getState().game.username,
//                         type: getState().game.type,
//                         direction: getState().game.direction,
//                     }),
//                 };
//                 fetch("https://labyrinth-technigo.herokuapp.com/start", options)
//                     .then(res => res.json())
//                     .then(maze => dispatch(game.actions.setQuote(maze)));
//                 dispatch(game.actions.setAuthor(true)),
//                     dispatch(game.actions.isLoading(false))
//             };

//         }

    

//     }

// export default game;

// export const startGame = () => {
//     return (dispatch, getState) => {
//         const settings = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ username: getState().game.username }),
//         };
//         fetch("
//   https://labyrinth-technigo.herokuapp.com/start
//             ", settings)
//                 .then((res) => res.json())
//                 .then(
//                     (data) => dispatch(game.actions.gamePosition(data)),
//                     dispatch(game.actions.gameStarted(true)),
//                     dispatch(game.actions.isLoading(false))
//                 );
//     };
// };

// export const playerAction = () => {
//     return (dispatch, getState) => {
//         dispatch(game.actions.isLoading(false));
//         const settings = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 username: getState().game.username,
//                 type: getState().game.type,
//                 direction: getState().game.direction,
//             }),
//         };
//         fetch("
//   https://labyrinth-technigo.herokuapp.com/action
//             ", settings)
//                 .then((res) => res.json())
//                 .then(
//                     (data) => dispatch(game.actions.gamePosition(data)),
//                     dispatch(game.actions.gameStarted(true)),
//                     dispatch(game.actions.isLoading(false))
//                 );
//     };
// }; 
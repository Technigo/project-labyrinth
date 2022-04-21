import { createSlice } from '@reduxjs/toolkit';

const game = createSlice ({
    name: 'game',
    initialState: {
        username: null,
        started: false,
        position: {},
        type: '',
        direction: '',
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setGame: (store, action) => {
            store.started = action.payload;
        },
        setPosition: (store, action) => {
            store.position = action.payload;
        },
        setType: (store, action) => {
            store.type = action.payload;
        },
        setDirection: (store, action) => {
            store.direction = action.payload;
        }
    },
});

    export const startGame = () => {
        return (dispatch, getState) => { 
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: getState().game.username
                }),
            }
            fetch('https://labyrinth-technigo.herokuapp.com/start', options)
            .then((res) => res.json())
            .then((data) => {
                dispatch(game.actions.setPosition(data))
                dispatch(game.actions.setGame(true))
                console.log(data)
            });
        }
    };
            

    export const continueGame = () => {
        return (dispatch, getState) => {
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: getState().game.username,
                    type: getState().game.type,
                    direction: getState().game.direction,
                }),
            }
            fetch('https://labyrinth-technigo.herokuapp.com/action', options)
            .then((res) => res.json())
            .then((data) => {
                dispatch(game.actions.setPosition(data))
                dispatch(game.actions.setGame(true))
                console.log(data)
            })    
        }
    };




export default game;




// export const generateDirection = () => {
//     return (dispatch, getState) => {
//         const options = {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 username: getState().directions.username
//             }),
//         };
//         fetch('https://labyrinth-technigo.herokuapp.com/start', options)
//         .then((res) => res.json())
//         .then(
//                 (data) => dispatch(directions.actions.setDirection(data))
//             );
//     };
// };
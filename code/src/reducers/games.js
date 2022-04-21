import { createSlice } from "@reduxjs/toolkit"

const games = createSlice({
    name: 'games',
    initialState: {
        username: null,
        game: null,
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setGame: (store, action) => {
            store.game = action.payload;
        }
    }
});

export const generateGame = () => { //Thunk. A function that immediately returns another function.
    return (dispatch, getState) => {
        fetch('https://labyrinth-technigo.herokuapp.com/start', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({username: getState().game.username})
        })
            .then(res => res.json())
            .then(game => dispatch(games.actions.setGame(game)));
    }
}

//Created new thunk with hardcoded type and direction acc to instructions, 
//for upcoming steps we should probably not hardcode it
export const generateAction = () => {
    return (dispatch, getState) => {
        fetch('https://labyrinth-technigo.herokuapp.com/action', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                username: getState().game.username,
                type: 'move',
                direction: 'East'
            })
        })
            .then(res => res.json())
            .then(game => dispatch(games.actions.setGame(game)));
    }
}

export default games;


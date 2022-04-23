import { createSlice } from "@reduxjs/toolkit"

import { loading } from "reducers/loading";

const games = createSlice({
    name: 'games',
    initialState: {
        username: null,
        game: [],
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
        dispatch(loading.actions.setLoading(true))
        fetch('https://labyrinth-technigo.herokuapp.com/start', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({username: getState().game.username})
        })
            .then(res => res.json())
            .then(game => dispatch(games.actions.setGame(game)))
            .finally(dispatch(loading.actions.setLoading(false)));
    }
}

const directionArray = [
    'East',
    'South',
    'West',
    'North'
  ]

export const generateAction = (index) => {
    return (dispatch, getState) => { 
        dispatch(loading.actions.setLoading(true));   
        console.log(index)
        fetch('https://labyrinth-technigo.herokuapp.com/action', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                username: getState().game.username,
                type: 'move',
                direction: `${directionArray[index]}`
            })
        })
            .then(res => res.json())
            .then(game => dispatch(games.actions.setGame(game)))
            .finally(dispatch(loading.actions.setLoading(false)));
    }
}

export default games;


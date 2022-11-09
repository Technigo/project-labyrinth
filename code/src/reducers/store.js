/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';


const initialState = {
    username: "",
    currentDirection: [],
     
}

export const game = createSlice({
    name:'game', // do we need to have the same name ?
    initialState,
    reducers: {
        setUserName: (store, actions) => {
            store.username = actions.payload
            // connect username to unique ID
        },
        setCurrentDirection: (store, actions) => {
            store.currentDirection = actions.payload
        },
       
    }
})
export const fetchTheGame = () => {
    
    return (dispatch, getState) => {
      dispatch(ui.actions.setLoading(true));
       const option = {
        method: 'POST',
        headers:{ 
            'Content-type': 'application/json' 
        },
        body: JSON.stringify({
            username: getState().game.username,}),
       }
       fetch(`https://labyrinth.technigo.io/start`, option)
       .then((resp) => resp.json())
       .then((json) => { dispatch(game.actions.setCurrentDirection(json))
    })

    .then((startGame) => console.log('startGame', startGame))
    .finally(() => dispatch(ui.actions.setLoading(false)))
    }
}

export const contiuneGame = (type, direction) => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true));

        const option = {
            method: 'POST',
            headers:{ 'Content-type': 'application/json' },
            body: JSON.stringify({
            username: getState().game.username, 
            type,
            direction,
        }),
           }
    fetch('https://labyrinth.technigo.io/action', option)
    .then((res) => res.json())
    .then((json) => {
        dispatch(game.actions.setCurrentDirection(json))
    })
    .finally(() => dispatch(ui.actions.setLoading(false)))
    }
}


// fetch link https://labyrinth.technigo.io/start

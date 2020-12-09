import { createSlice } from "@reduxjs/toolkit"

import { ui } from './ui'

const initialGame = {user:
    { username: "" },
    currentPosition:{},
    position:[]
}
    
export const game = createSlice({
    name: "game",
    initialState: initialGame,
    reducers: {
        startGame: (state, action) => {
        state.user.username = action.payload.username
        state.currentPosition = {...action.payload.json}
        state.position = [...state.position, action.payload.json]
        },
        restart: () => {
            return initialGame
        }
    }
})


export const fetchStart = (username) => {

    return(dispatch) => {
        dispatch(ui.actions.setLoading(true))
        dispatch(ui.actions.setStarted(true))          
        fetch('https://wk16-backend.herokuapp.com/start',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ username: username }),
            })
            .then(result => result.json())
            .then((json) => {
                dispatch(game.actions.startGame({json, username}))
                dispatch(ui.actions.setLoading(false))  
            })   

    }
}

export const fetchMove = (username, type, direction) => {
     
     return(dispatch) => {
     dispatch(ui.actions.setLoading(true))         
     fetch('https://wk16-backend.herokuapp.com/action',{
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify({ username , type , direction}),
         })
         .then(result => result.json())
         .then((json) => {
             dispatch(game.actions.startGame({json, username}))
             dispatch(ui.actions.setLoading(false))  
         })   
 
     }
 }
 
 
 
 

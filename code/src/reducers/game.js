import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const game = createSlice ({
    name: 'game',
    initialState: {
        username: '',
        actions: [],
        description: '',
        coordinates: '',
    },
    reducers: {
        // For each reducer, we want the action, coordinates and description
        startGame:(store, action)=>{
            store.actions = action.payload.actions
            store.coordinates = action.payload.coordinates
            store.description = action.payload.description
        },

        continueGame:(store, action)=>{
            store.actions = action.payload.actions
            store.coordinates = action.payload.coordinates
            store.description = action.payload.description   
        }, 
        setUserName: (store, action)=> {
            store.username = action.payload
        }  
    }
}) 

export const startThunk = (userName) => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch("https://wk16-backend.herokuapp.com/start", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({ 
                username: userName })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                dispatch(game.actions.startGame(data))
                dispatch(ui.actions.setLoading(false))
            })
            
    }
}

export const actionThunk = (userName, action) => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch("https://wk16-backend.herokuapp.com/action", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},           
                body: JSON.stringify({ 
                username: userName,
                type: action.type,
                direction: action.direction,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch(game.actions.continueGame(data))
                dispatch(ui.actions.setLoading(false))
            })
            
    }
}
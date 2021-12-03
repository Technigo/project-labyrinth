import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

import{ START_URL } from '../utils/urls'
import { ACTION_URL } from '../utils/urls'


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
        },
        restartGame: (store) => {
            store.username = ''
            store.actions = []
            store.description = ''
            store.coordinates = ''

        }
    }
}) 

export const startThunk = (userName) => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch(START_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({ 
                username: userName })
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch(ui.actions.setLoading(false))
                dispatch(game.actions.startGame(data))
                
            })
            
    }
}

export const actionThunk = (userName, action) => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch(ACTION_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},           
                body: JSON.stringify({ 
                username: userName,
                type: action.type,
                direction: action.direction,
                description:action.description,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                
                dispatch(ui.actions.setLoading(false))
                dispatch(game.actions.continueGame(data))
                
            })
            
    }
}
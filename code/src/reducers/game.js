// import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

// to states 

const game = createSlice({
 name: 'labyrinth',
 initialState: {
     username: null,
     description: null
 }, 
 
 // A action that change the iniital state to the input value the user puts in 
    reducers: {
     setPlayerName: (state, action) => {
         state.username = action.payload
     },
     setDescription: (state, action) => {
         state.desciption = action.payload
        console.log(state.desciption)
     }
 }

})

//creating a POST request that will save the player name into the API
//we get back the data object which we dispatch as an action to change the state of desciption
// Creating a THUNK function inside a function, so we can reuse it 
//Content type so the fetch knows what type of data itcill expect 


export const generateGame= () => {
    return (dispatch, getState) => {
        fetch("https://wk16-backend.herokuapp.com/start", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: getState().game.username})})
        .then(res => res.json())
        .then(dataObject => dispatch(game.actions.setDescription(dataObject)));
        }
    }


export default game 
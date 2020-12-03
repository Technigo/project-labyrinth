import { createSlice } from '@reduxjs/toolkit';

// const initialContent = localStorage.getItem('game')
// ? JSON.parse(localStorage.getItem('game'))
// : {};



export const game = createSlice({
    name: 'game',
    initialState: {
        gameDetails: {},
        userName: "",
        history: [],
        isGameStarted: false,
    },
    reducers: {
        updateUserName: (state, action) => {
            state.userName = action.payload;
        },
        nextStep: (state, action) => {
            state.isGameStarted = true;
            state.gameDetails = action.payload;
            state.isGameStarted = true;
            console.group("Here" + action.payload)
         },
         restartGame: (state, action) => {
             return game.initialState
         },
         
        // historyGoBack: state => {

        // }
    }
})


import { createSlice } from '@reduxjs/toolkit';

// const initialContent = localStorage.getItem('game')
// ? JSON.parse(localStorage.getItem('game'))
// : {};

const initialState = {
        gameDetails: {},
        userName: "",
        isLoading: false,
        history: [],
        isGameStarted: false,
 }

export const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        updateUserName: (state, action) => {
            state.userName = action.payload;
        },
        nextStep: (state, action) => {
            state.isGameStarted = true;
            state.gameDetails = action.payload;
            console.log(state.gameDetails)
         },
         restartGame: (state, action) => {
             return initialState
         },
         setLoader: (state, action) => {
            state.isLoading = action.payload;
         },
        // setHistory: (state, action) => {
        //  state.history = [...state.history, action.payload]
        // }
    }
})


import { createSlice } from '@reduxjs/toolkit';

const startGame = localStorage.getItem('game')
? JSON.parse(localStorage.getItem('game'))
: {};

export const game = createSlice({
    name: 'game',
    initialState: {
        game: startGame,
        userName: "",
        history: [],
    },
    reducers: {
        updateUserName: (state, action) => {
            state.userName = action.payload;
        },
        // generateNextStep: (state, action) => {

        // },
        // historyGoBack: state => {

        // }
    }
})
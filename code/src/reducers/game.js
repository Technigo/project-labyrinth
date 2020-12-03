import { createSlice } from '@reduxjs/toolkit';

// const initialContent = localStorage.getItem('game')
// ? JSON.parse(localStorage.getItem('game'))
// : {};

// const initialState = {
//     name: "",
//     game: {},
//     isGameStarted: false
// }


export const game = createSlice({
    name: 'game',
    initialState: {
        game: {},
        userName: "",
        history: [],
     //   isGameStarted: false,
    },
    reducers: {
        updateUserName: (state, action) => {
            state.userName = action.payload;
        },
        nextStep: (state, action) => {
            
            state.game = action.payload;
  //          state.isGameStarted = true;
            console.group("Here" + action.payload)
         },
        // historyGoBack: state => {

        // }
    }
})
import { createSlice } from "@reduxjs/toolkit";

export const moves = createSlice({
    name: "moves",
    initialState: {
        username: "",
        move: {
            
            actions: [{}]
        },
        history: []
    },
     reducers: {
        addUser: (state, action) => {
            state.username = action.payload
        },
        generateMove: (state, action) => {
            // Check if move is an empty object or not.
            // If it's empty, do not push empty object to the history array
            // If it's' not, push an object which is a copy of the move object
            if (state.move){
                state.history = [...state.history, state.move]
            }
            state.move = action.payload
        },
        generateAction: (state, action) => {
            state.move = action.payload
        },
        historyGoBack: (state, action) => {
            // Checks to see what the length of the history array is and removes one of the array items which is the players current move. This enables the player to go back to the previous page
            if (state.history.length > 0) { 
                state.move = state.history[state.history.length - 1]
                state.history = state.history.slice(0, state.history.length -1)
                ;
            }
        } 
    }
});
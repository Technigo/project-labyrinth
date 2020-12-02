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
            state.history = [...state.history, state.move]
            state.move = action.payload
        },
        generateAction: (state, action) => {
            state.move = action.payload
        },
        historyGoBack: (state, action) => {
            if (state.history.length > 0) { 
                state.move = state.history[state.history.length - 1]
                state.history = state.history.slice(0, state.history.length -1)
            }
        } 
    }
});
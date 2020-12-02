 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
};

export const ui = createSlice({
    name: "ui",
    initialState,
    reducers: {
        gameIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});
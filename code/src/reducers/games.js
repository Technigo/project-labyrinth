import { createSlice } from "@reduxjs/toolkit";

const games = createSlice({
    name: 'games',
    initialState: {
        username: null,
        game: null,
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setGame: (store, action) => {
            store.game = action.payload;
        }
    }
});

export default games;


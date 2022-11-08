import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    currentDirection: [],
    loading: false
}

export const game = createSlice({
    name:'game', // do we need to have the same name ?
    initialState,
    reducers: {
        addUserName: (store, action) => {
            store.username = action.payload
        },
        setCurrentDirection: (store, action) => {
            store.currentDirection = action.payload
        }
    }
})


// fetch link https://labyrinth.technigo.io/start

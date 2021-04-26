import { createSlice } from '@reduxjs/toolkit'

export const games  = createSlice({
    name: 'games',
    initialState: {
        coordinates: null,
        description: null,
        actions:[],
        username: ""
    },
    reducers: {
        //Mer här
    }
})
import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({  
    name: 'game',
    initialState: {
        directions: {},
        history: [],
    }
})

//reducers


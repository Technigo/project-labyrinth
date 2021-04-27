import { createSlice } from '@reduxjs/toolkit'

const maze = createSlice({
    name: 'maze',
    initialState: {
        username: 'New Player'
    } ,
    reducers: {
       startGame: (store, action) => {
        store.username = action.payload;
       } 

    }
})

export default maze
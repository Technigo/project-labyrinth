import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
    name: 'game', 
    initialState: {
        player: null
    },
    reducers: {
        setPlayer: (store, action) => {
            store.player = action.payload
        }
    }

})  

export default game

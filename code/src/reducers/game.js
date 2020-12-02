import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({  
    name: 'game',
    initialState: {
        gameinfo: {
            actions: [{}]
        },
        history: [],
    },

reducers: {
    /*generateStart: (state, action) => {
        state.gameinfo = action.payload 
        console.log(state.gameinfo)
    },*/


    generateDirection: (state, action) => {
        state.gameinfo = action.payload
        console.log(state.gameinfo)
    }
}

})


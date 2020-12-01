import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({  
    name: 'game',
    initialState: {
        gameinfo: {},
        history: [],
    },

reducers: {
    generateDirection: (state, action) => {
        state.gameinfo = action.payload
        console.log(state.gameinfo)
    }
}

})

//reducer
import { createSlice } from '@reduxjs/toolkit'


export const game = createSlice({  
    name: 'game',
    initialState:  {
        username:"username",
        gameinfo: {
            actions: [{}],
           
        }
        
    },

reducers: {
    uppDateUsername: (state, action) => {
        state.username = action.payload 
        console.log(state.username)
    },


    generateDirection: (state, action) => {
        state.gameinfo = action.payload
        console.log(state.gameinfo)
    }
}

})


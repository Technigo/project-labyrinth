import {createSlice} from "@reduxjs/toolkit";

const game  = createSlice ({
    name:'game',
    initialState: {
        username: null
        
    },
    reducers: {
        setUsername: (store, action) =>{
            store.username = action.payload
        }

    }
});
export default game
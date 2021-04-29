import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
    name: 'game',
    initialState: {
        username:'',

    },
    reducers: {
        setUserName:(store, action) => {
            store.username =action.payload
        }
        
    }
})




  export default game
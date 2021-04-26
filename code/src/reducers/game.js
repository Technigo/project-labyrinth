import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
    name: 'game',
    initialState: {
        username: '',
        question: ''
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setQuestion: (store, action) => {
            store.question = action.payload
        },

    }
})

export default game
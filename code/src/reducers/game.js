import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
    name: 'game',
    initialState: {
        username: null,
        loading: false
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setLoading: (store, action) => {
            store.loading = action.payload
        }
    }

})

export default game
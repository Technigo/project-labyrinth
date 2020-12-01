import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
    name: 'ui',
    initialState: {
        isLoading: false
    },
    reducers: {
        setLoading: (state, action) => {
            console.log(state.isLoading)
            state.isLoading = action.payload
        }
    }
})

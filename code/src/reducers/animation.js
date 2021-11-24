import { createSlice } from '@reduxjs/toolkit'

export const animation = createSlice({
    name:'animation',
    initialState: {
        loading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})
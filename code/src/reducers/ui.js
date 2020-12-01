import { createSlice } from '@reduxjs/toolkit'

const initialState = 
{
    isStarted: false,
    isLoading: false
}

export const ui = createSlice ({

    name:'ui',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setStarted: (state, action) => {
            state.isStarted = action.payload
        },
        restart: () => {
            return initialState
        }
    }
})
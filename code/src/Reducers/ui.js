import { createSlice } from "@reduxjs/toolkit";

export const ui = createSlice({
    name: 'ui',
    initialState: {
        isLoading: false,
    }
    ,

    reducers: {
        //action to set the loader
        isLoading: (state, action) => {
            state.isLoading = action.payload
        },

    }

})

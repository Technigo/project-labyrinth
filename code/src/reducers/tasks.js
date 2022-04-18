import { createSlice } from "@reduxjs/toolkit";


const quotes = createSlice({
    name: "quotes",
    initialState: {
        author: null,
    },
    reducers: {
        setAuthor: (store, action) => {
            store.author = action.payload;
        },
    }
})

export default quotes;

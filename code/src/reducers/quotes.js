import { createSlice } from "@reduxjs/toolkit";

const quotes = createSlice({
    name: 'quotes',
    initialState: {
        author: '',
        quote: '',
        history: []
    },
    reducers: {
        setAuhor: (store, action) => {
        store.author = action.payload;
        },
        setQuotes: (store, action) => {
            store.quote = action.payload
        }
    }
});

export default quotes;

export const generateQuote = () => {
    return (dispatch, getState) => {
        fetch(`https://api.quotable.io/random?author=${getState().quotes.author}`)
        .then((response) => response.json())
        .then((quote) => console.log(quote));
    }
}
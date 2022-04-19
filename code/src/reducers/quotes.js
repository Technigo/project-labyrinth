import { createSlice } from "@reduxjs/toolkit";


const quotes = createSlice({
    name: "quotes",
    initialState: {
        author: null,
        quote: null
    },
    reducers: {
        setAuthor: (store, action) => {
            store.author = action.payload;
        },
        setQuote: (store, action) => {
            store.quote = action.payload;
        },
    }
});

export const generateQuote = (tag) => {
    return (dispatch, getState) => {
        if (tag) {
            fetch(`http://api.quotable.io/random?author=${getState().quotes.author}&tags=${tag}`)
                .then(res => res.json())
                .then(quote => dispatch(quotes.actions.setQuote(quote)))
        } else {
            fetch(`http://api.quotable.io/random?author=${getState().quotes.author}`)
                .then(res => res.json())
                .then(quote => dispatch(quotes.actions.setQuote(quote)))
        }
    }
}

export default quotes;

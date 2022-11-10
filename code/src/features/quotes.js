/* import { createSlice } from '@reduxjs/toolkit';
//import { useDispatch } from 'react-redux';

const quoteSlice = createSlice({
	name: 'quotes',
	initialState: {
		author: '',
		quote: '',
	},
	reducers: {
		setAuthor: (state, action) => {
			state.author = action.payload;
		},
		setQuote: (state, action) => {
			state.quote = action.payload;
		},
	},
});

export default quoteSlice;
export const { setAuthor, setQuote } = quoteSlice.actions;

export const generateQuote = () => {
	return (dispatch, getState) => {
		fetch(`https://api.quotable.io/random?author=${getState().quotes.author}`)
			.then((res) => res.json())
			.then((quote) => console.log(quote));
	};
}; */

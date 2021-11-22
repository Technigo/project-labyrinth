import { createSlice } from '@reduxjs/toolkit';

export const coolestLoader = createSlice({
	name: 'coolestLoader',
	initialState: {
		loading: false,
	},
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

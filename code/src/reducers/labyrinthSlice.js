import { createSlice } from '@reduxjs/toolkit';

export const labyrinthSlice = createSlice({
	name: 'labyrinth',
	initialState: {
		username: '',
		// content: initialContent,
		// history: initialHistory,
	},
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
		},
	},
});

export const {} = labyrinthSlice.actions;
export default labyrinthSlice.reducer;

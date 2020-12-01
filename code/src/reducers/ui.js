import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
};

export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      // send in payload with true or false and set new loading state
      state.isLoading = action.payload;
    }
  }
});

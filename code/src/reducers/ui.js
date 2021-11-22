import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
};

export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      // here we send in payload with true or false statement and set new state (loading)
      state.isLoading = action.payload;
    }
  }
});
import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({
  name: 'game',
  initialState: {
    username: ''
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
      console.log(action);
    }
  }
});

export default game;

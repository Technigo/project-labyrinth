import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  choices: []
}

export const userhistory = createSlice({
  name: 'userhistory',
  initialState,
  reducers: {
    addChoice: (store, action) => {
      store.choices = [...store.choices, action.payload]
    }
  }
})
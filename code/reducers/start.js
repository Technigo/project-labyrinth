import { createSlice } from '@reduxjs/toolkit';

//just started laborating with a reducer here

export const start = createSlice({
    name: "start",
    initialState: {
      items: []
    },
    reducers: {
      setStart: (store, action) => {
        store.all = action.payload; //all????
      }
    }
  });

  const startGame = {
    id:

  }
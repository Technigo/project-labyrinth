import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      type: '',
      direction: '',
      description:
              ''
    }
  ]
}

export const Game = createSlice(
  {
    name: '',
    initialState,
    reducers: {
      startGame: (store, action) => {

      },
      userChoice: (store, action) => {

      },
    }
  }
)
import  { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
    name: 'game',
    initialState: {
        game: {
          username:"MasterControlProgram",
          coordinates: "0,0",
          description: "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
          actions: [
              {
                type: "move",
                direction: "East",
                description: "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
              }
          ]
      }
    },

    reducers: {
        startGame:(state, action) => { 
          console.log(state)
        }
    }
});
  

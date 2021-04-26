import { createSlice } from "@reduxjs/toolkit";

export const moves = createSlice({
  name: "moves",
  initialState: {
    coordinates: null,
    description: null,
  },
  reducers: {
    setCoordinates: (store, action) => {
      console.log(action.payload);
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
  },
});

// {
//     "coordinates": "0,0",
//     "description": "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
//     "actions": [
//         {
//             "type": "move",
//             "direction": "East",
//             "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
//         }
//     ]
// }

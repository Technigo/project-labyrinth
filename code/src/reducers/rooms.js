import { createSlice } from '@reduxjs/toolkit'

const START_URL = "https://wk16-backend.herokuapp.com/start";
const ACTION_URL = "https://wk16-backend.herokuapp.com/action";

const initialState = {
  coordinates: "",
  description: "",
  actions: []
}

export const rooms = createSlice({
  name: 'rooms',
  initialState,
  
  reducers: {

    generateRoom: (state, action) => {
      fetch('')
        .then(res => res.json())
        .then(data => {
          // Här gör vi något med datan
        })
    }
  }
})


  
// {
//   "coordinates": "0,0",
//   "description": "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
//   "actions": [
//       {
//           "type": "move",
//           "direction": "East",
//           "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
//       }
//   ]
// } 
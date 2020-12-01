import { createSlice } from '@reduxjs/toolkit'

const username = "NewUserClaudiaAxel1337"
const START_URL = "https://wk16-backend.herokuapp.com/start";
const ACTION_URL = "https://wk16-backend.herokuapp.com/action";

const initialState = {
  coordinates: "",
  description: "",
  actions: []
}

const startGameFetchInfo = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: username })
}


export const rooms = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    // Reducer that starts the game. 
    startGame: (state, action) => {
      fetch(START_URL, startGameFetchInfo)
      .then(response => response.json())
      .then(data => 
        // Här vill vi spara information till state:t. 
        console.log(data)
      );
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
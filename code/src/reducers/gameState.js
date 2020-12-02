import { createSlice } from "@reduxjs/toolkit";

/* 
Vår data: 
{
    "coordinates": "0,3",
    "description": "The mouth of the chest swings open. The papers spring from the chest, whirling around your head.  You shield your face, but an instant later all is calm.  The papers, books and scrolls from the chest are now neatly arranged on the bookshelves around the room.",
    "actions": [
        {
            "type": "move",
            "direction": "South",
            "description": "A calm, faint melody flows into the room from the archway to the South.  Colors bounce calmly through the threshold. "
        },
        {
            "type": "move",
            "direction": "East",
            "description": "You see a bright light through an opening in the wall to the east. "
        }
    ]
}

*/

export const gameState = createSlice({
  name: "gameState",
  initialState: {
    gameDetails: {},
    //coordinates: "",
    // description: "",
    // actions: [],
    userName: "Technigo player5",
  },
  reducers: {
    startGame: (state, action) => {
      state.gameDetails = action.payload;
      console.log("payload: " + action.payload);
      console.log("userName: " + state.userName);
      console.log("coordinates: " + state.gameDetails.coordinates);
      console.log("description: " + state.gameDetails.description);
      console.log("actions: " + state.gameDetails.actions[0]);
    },
    commitAction: (state, action) => {
      state.gameDetails = action.payload;
      console.log("Here now!" + action.payload);
    },
  },
});

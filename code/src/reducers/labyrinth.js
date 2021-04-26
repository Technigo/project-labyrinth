import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice({
    name: 'labyrinth',
    initialState: {
        username: null,
        type: "move",
        direction: null, 
        response: {}
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setDirection: (store, action) => {
            store.direction = action.payload;
        },
        setResponse: (store, action) => {
            store.response = action.payload
        }
    }
});

export const generateLabyrinth = (direction) => {
    return (dispatch, getState) => {
          fetch(`https://wk16-backend.herokuapp.com/start`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: getState().labyrinth.username })
          })
            .then(res => res.json())
            .then(data => dispatch(labyrinth.actions.setResponse(data)));
        }
}

export default labyrinth;

//example response
/* {
    "coordinates": "0,0",
    "description": "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
    "actions": [
        {
            "type": "move",
            "direction": "East",
            "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
        }
    ]
} */
import { createSlice } from "@reduxjs/toolkit";

export const labyrinth = createSlice({
    name: 'labyrinth',
    initialState: {
        destination: [{}]
    },
    reducers: {
        setLabyrinthPath: (state, action) => {
            state.destination = action.payload;
        }
    }
});

export const fetchLabyrinth = () => {
    return (dispatch) => {
       // dispatch loading component with actions.set...(true)
    fetch('https://wk16-backend.herokuapp.com/start', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {username: 'Player'}), 
        })
        .then((res) => res.json())
        .then((json) => {
            console.log (json)
            dispatch(labyrinth.actions.setLabyrinthPath(json)); 
            // add code for set loading false
        })
    }
};
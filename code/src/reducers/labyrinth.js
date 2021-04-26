import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice (
{
    name: "labyrinth",
    initialState:
    {
    username: null,
    description: null
    },
    reducers: {
        setUsername: (store, action) => {
           store.username = action.payload;
        },
        setDescription: (store, action) => {
            store.description = action.payload;
        console.log(store.description)
        }
    }
}
)

export const generateStory = () => {
    return (dispatch, getState) => {
    fetch("https://wk16-backend.herokuapp.com/start", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: getState().labyrinth.username})})
    .then(res => res.json())
    .then(data => dispatch(labyrinth.actions.setDescription(data)));

    }
}

export default labyrinth;
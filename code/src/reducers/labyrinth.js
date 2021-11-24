import { createSlice } from '@reduxjs/toolkit';
import { animation } from './animation'

export const labyrinth = createSlice({
    name: 'labyrinth',
    initialState: {
    destination: [],
    history: [],
    userName: '',
    },
    reducers: {
    setLabyrinthPath: (state, action) => {
        state.destination = action.payload;
    },
    addUserName: (state, action) =>{
        state.userName = action.payload
    },
    setHistory: (state, action) => {
        
        state.history = [action.payload, ...state.history] 
    },
}}
);

export const fetchLabyrinth = ({url, type, direction}) => { // this is passed along, depending on what user clicks on
    console.log('i am here');
    return (dispatch, getState) => {
    dispatch (animation.actions.setLoading(true))
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            username: getState().labyrinth.userName,
            type,
            direction,
        }),
    })
        .then((res) => res.json())
        .then((json) => {
        dispatch(labyrinth.actions.setLabyrinthPath(json));
        dispatch (animation.actions.setLoading(false)) //we can type .finally
        });
    };
};

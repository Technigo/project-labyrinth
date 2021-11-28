import { createSlice } from '@reduxjs/toolkit';
import { animation } from './animation'

//this is for the labyrinth-game
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
    setHistory: (state, action) => { {/*this is not used, due to lack of time. If we had more time we would have implemented it further.. */}
        state.history = [...state.history, action.payload] 
    },
    restartLabyrinth: (state) => {
        state.destination = []
        state.userName = ''
    },
}}  
);

export const fetchLabyrinth = ({url, type, direction}) => { // this is passed along, depending on what user clicks on
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
        dispatch (animation.actions.setLoading(false)) //we can type .finally id useHistory is added at a later stage
        });
    };
};

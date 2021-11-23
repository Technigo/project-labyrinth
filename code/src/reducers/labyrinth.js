import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
    name: 'labyrinth',
    initialState: {
    destination: [],
    },
    reducers: {
    setLabyrinthPath: (state, action) => {
        state.destination = action.payload;
    },
    },
});

export const fetchLabyrinth = () => {
    console.log('i am here');
    return (dispatch) => {
    // dispatch loading component with actions.set...(true)
    fetch('https://wk16-backend.herokuapp.com/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'gulrukh' }),
    })
        .then((res) => res.json())
        .then((json) => {
        dispatch(labyrinth.actions.setLabyrinthPath(json));
        // add code for set loading false
        });
    };
};

export const fetchActions = ({direction}) => {
    console.log(direction)
    return(dispatch) => {
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { username: 'gulrukh',
                type: 'move',
                direction: direction,
        }),
    })
        .then((res) => res.json())
        .then((json) => {
        dispatch(labyrinth.actions.setLabyrinthPath(json));
        // add code for set loading false
        });
    };
};
 

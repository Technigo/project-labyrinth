import { createSlice } from '@reduxjs/toolkit';


const directions = createSlice ({
    name: 'directions',
    initialState: {
        username: null,
        direction: null
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setDirection: (store, action) => {
            store.direction = action.payload;
        },
    },
});

export const generateDirection = () => {
    return (dispatch, getState) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: getState().directions.username
            }),
        };
        fetch('https://labyrinth-technigo.herokuapp.com/start', options)
        .then((res) => res.json())
        .then(
                (data) => dispatch(directions.actions.setDirection(data))
            );
    };
};



/* 
export const generateDirection = () => {
    return (dispatch, getState) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: getState().directions.username})
        }
    }
}

fetch('https://labyrinth-technigo.herokuapp.com/start')
.then(res => res.json())
.then(direction => dispatch(directions.actions.setDirection(direction)))


*/

export default directions;

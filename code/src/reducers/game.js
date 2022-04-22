import { createSlice } from '@reduxjs/toolkit';
import ui from './ui';

export const game = createSlice({
    name: 'game',
    initialState: {
        username: null,
        currentLocation: null,
        type: '',
        direction: '',
    },

    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setCurrentLocation: (store, action) => {
            store.currentLocation = action.payload;
        },
        setType: (store, action) => {
            store.type = action.payload;
        },
        setDirection: (store, action) => {
            store.direction = action.payload;
        }

    }
});

export const generateMaze = () => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true));

        const settings = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: getState().game.username }),
        };
        fetch("https://labyrinth-technigo.herokuapp.com/start", settings)
            .then((res) => res.json())
            .then((json) => {
                setTimeout(() => dispatch(game.actions.setCurrentLocation(json)))
                setTimeout(() => dispatch(ui.actions.setLoading(false)), 1000)
            })

    };
};

export const nextAction = () => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true))

        const settings = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: getState().game.username,
                type: getState().game.type,
                direction: getState().game.direction,
            }),
        };
        fetch("https://labyrinth-technigo.herokuapp.com/action", settings)
            .then((res) => res.json())
            .then((json) => {
                setTimeout(() => dispatch(game.actions.setCurrentLocation(json)))
                setTimeout(() => dispatch(ui.actions.setLoading(false)), 1000)
            });
    };
}; 
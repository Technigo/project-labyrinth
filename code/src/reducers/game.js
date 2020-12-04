import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
    name: 'game',
    initialState: {
        username: '',
        description: '',
        direction: [],
        coordinates: '',
        history: [],
        fetching: false,
        timer: false
    },
    reducers: {
        generateGame: (store, action) => {
            //Update direction, description, coordinates after fetch.
            store.direction = action.payload.actions;   
			store.description = action.payload.description;
            store.coordinates = action.payload.coordinates;
            
            //Saves direction, description, coordinates after fetch in history.
            store.history = [...store.history, action.payload]; 
        },
        updateUserName: (store, action) => {
            store.username = action.payload;
        },
        historyGoBack: (store, action) => {
            if (store.history.length > 0) {
                store.direction = store.history[store.history.length - 1];
                store.history = store.history.slice(0, store.history.length - 1);
            }
        },
        // Updates loading true or false
        generateLoading: (store, action) => {
            store.isLoading = action.payload;
        },
        setFetching: (store, action) => {
            store.fetching = action.payload;
        },
        setTimer: (store, action) => {
            store.timer = action.payload;
        },
    }
});
import { createSlice } from "@reduxjs/toolkit";

const labyrinth = createSlice({
    name: "labyrinth",
    initialState: {
        player: null,
        stage: null,
        history: [],
        loading: false,
    },
    reducers: {
        setPlayer: (store, action) => {
            store.player = action.payload;
        },
        setStage: (store, action) => {
            if (store.stage) {
                store.history.push(store.stage)
            }
            store.stage = action.payload;

        },
        setPreviousStage: (store, action) => {
            if (store.history.length !== 0) {
                store.stage = store.history[store.history.length - 1]
                store.history.splice(-1, 1)
            }
        },
        setRestartGame: (store, action) => {
            store.stage = null;
            store.player = null;
            store.history = [];
        },
        toggleLoading: (store, action) => {
            console.log("toggle loading to", action.payload)
            store.loading = action.payload
        },
    }
});

export const generateGame = (action = null) => {
    if (!action) {
        return (dispatch, getState) => {
            dispatch(labyrinth.actions.toggleLoading(true))
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: getState().labyrinth.player,
                }),
            }; 
            fetch(`https://labyrinth-technigo.herokuapp.com/start`, options)
                .then(res => res.json())
                .then(stage => {
                    dispatch(labyrinth.actions.setStage(stage))
                    dispatch(labyrinth.actions.toggleLoading(false))
                })
        }
    }

    return (dispatch, getState) => {
        dispatch(labyrinth.actions.toggleLoading(true))
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: getState().labyrinth.player,
                type: action.type,
                direction: action.direction,
            }),
        }; 
        fetch(`https://labyrinth-technigo.herokuapp.com/action`, options)
            .then(res => res.json())
            .then(stage => {
                dispatch(labyrinth.actions.setStage(stage))
                dispatch(labyrinth.actions.toggleLoading(false))
            })
    }
}

export default labyrinth;

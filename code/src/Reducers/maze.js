import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const initialState = {
    userName: "",
    actualStep: {},
    history: [
        // {
        //     choice: {
        //         type: "move",
        //         direction: "East"
        //     },
        //     coordinates: "0,0",
        //     description: "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
        //     actions: [
        //         {
        //             "type": "move",
        //             "direction": "East",
        //             "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
        //         }
        //     ]
        // }
    ]
}

export const maze = createSlice({
    name: 'maze',
    initialState,

    reducers: {
        //action to set the User name
        addUserName: (state, action) => {
            state.userName = action.payload;
        },

        //action to set every step
        setNextStep: (state, action) => {
            const { coordinates, description, actions } = action.payload;
            state.actualStep = {
                coordinates: coordinates,
                description: description,
                actions: actions
            }
        },

        //action to save info in history
        addToHistory: (state, action) => {
            const { coordinates, description, actions, choice } = action.payload;
            if (choice) {
                state.history.push({
                    coordinates: coordinates,
                    description: description,
                    actions: actions,
                    choice: choice
                })
            }

        },

        // action to restart a new game
        startAgain: () => {
            return initialState
        }

    }

})

export const fetchNextStep = (url, options) => {

    return (dispatch) => {
        dispatch(ui.actions.isLoading(true))
        fetch(url, options)
            .then(res => res.json())
            .then(step => {
                dispatch(ui.actions.isLoading(false))
                dispatch(maze.actions.setNextStep(step))
            })
            .catch((error) => {
                console.log('Error in Fetch:' + error.message);
            });
    }
}

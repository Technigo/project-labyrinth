import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const initialState = {
    userName: "",
    actualStep:
    {
        coordinates: "0,0",
        description: "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
        actions: [
            {
                "type": "move",
                "direction": "East",
                "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
            }
        ]
    },
    history: [
        {
            choice: {
                type: "move",
                direction: "East"
            },
            coordinates: "0,0",
            description: "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
            actions: [
                {
                    "type": "move",
                    "direction": "East",
                    "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
                }
            ]
        }
    ]
}

export const maze = createSlice({
    name: 'maze',
    initialState,

    reducers: {
        //action to start the game
        start: (state, action) => {
            const { coordinates, description, actions } = action.payload.step;
            //validate 
            state.actualStep = { coordinates, description, actions };
        },

        //action to set the User name
        addUserName: (state, action) => {
            console.log(action)
            state.userName = action.payload;
        },

        //action to set every step
        setNextStep: (state, action) => {
            const { coordinates, description, actions } = action.payload.step;
            state.actualStep.push({
                coordinates: coordinates,
                description: description,
                actions: actions
            })
        },

        //action to save info in history
        addToHistory: (state, action) => {
            const { coordinates, description, actions, choice } = action.payload.choice;
            if (choice) {
                state.history.push({
                    coordinates: coordinates,
                    description: description,
                    actions: actions,
                    choice: choice
                })
            }

        },

    }

})

export const fetchNextStep = (url) => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch(url)
            .then(res => res.json())
            .then(step => {
                dispatch(maze.actions.setNextStep(step))
                dispatch(ui.actions.setLoading(false))
            })
    }
}

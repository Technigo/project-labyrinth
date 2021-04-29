import {
    createSlice
} from '@reduxjs/toolkit';

const labyrinth = createSlice({
    name: "labyrinth",
    initialState: {
        data: {
            username: null,
            description: null,
            direction: null,
            actions: null,
            isLoading: false,
            coordinates: null,
            history: []
        }
    },
    reducers: {
        setUsername: (store, action) => {
            store.data.username = action.payload;
        },
        setData: (store, action) => {
            const {
                description,
                coordinates,
                actions
            } = action.payload;
            store.data.description = description;
            store.data.coordinates = coordinates;
            store.data.actions = actions;
        },
        setDirection: (store, action) => {
            store.data.direction = action.payload;
            store.data.history = [...store.data.history, action.payload]
        },
        setLoading: (store, action) => {
            store.data.isLoading = action.payload;
        }
    }
})

export const generateStart = () => {
    return (dispatch, getState) => {
        dispatch(labyrinth.actions.setLoading(true))
        fetch("https://wk16-backend.herokuapp.com/start", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: getState().labyrinth.data.username
                })
            })
            .then(res => res.json())
            .then(data => {
                dispatch(labyrinth.actions.setLoading(false))
                dispatch(labyrinth.actions.setData({
                    description: data.description,
                    coordinates: data.coordinates,
                    actions: data.actions
                }))

            })
    }
}

export const generateStory = () => {
    return (dispatch, getState) => {
        dispatch(labyrinth.actions.setLoading(true))
        fetch("https://wk16-backend.herokuapp.com/action", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: getState().labyrinth.data.username,
                    type: "move",
                    direction: getState().labyrinth.data.direction
                })
            })
            .then(res => res.json())
            .then(data => {
                dispatch(labyrinth.actions.setLoading(false))
                dispatch(labyrinth.actions.setData({
                    description: data.description,
                    coordinates: data.coordinates,
                    actions: data.actions
                }))
            });

    }
}

export default labyrinth;
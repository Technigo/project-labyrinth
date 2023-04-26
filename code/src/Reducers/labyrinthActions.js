import { labyrinthSlice } from './labyrinthSlice';

export const Startgame = () => {
    return (dispatch, getState) => {
        dispatch(labyrinth.actions.setLoading(true));
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: getState().labyrinth.userName }),
        };

    fetch('https://labyrinth.technigo.io/start', options)
        .then((res) => res.json())
        .then((json) => {
            dispatch(labyrinth.actions.setDescription(json.description));
            dispatch(labyrinth.actions.setMoves(json.actions));
            dispatch(labyrinth.actions.setCoordinates(json.coordinates));
        })
        .finally(() => dispatch(labyrinth.actions.setLoading(false)));
    };
};

export const continueGame = () => {
    return (dispatch, getState) => {
        dispatch(labyrinth.actions.setLoading(true));

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                username: getState().labyrinth.userName,
                type: 'move',
                direction: getState().labyrinth.directions,
            }),
        };

        fetch('https://labyrinth.technigo.io/action', options)
        .then((res) => res.json())
        .then((json) => {
            dispatch(labyrinth.actions.setDescription(json.description));
            dispatch(labyrinth.actions.setMoves(json.actions));
            dispatch(labyrinth.actions.setCoordinates(json.coordinates));
            dispatch(labyrinth.actions.setDirection(json.actions.direction));
        })
        .finally(() => dispatch(labyrinth.actions.setLoading(false)));
    };
};

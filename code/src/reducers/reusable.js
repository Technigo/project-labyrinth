import { game } from './game';

//Fetch game start
export const generateGameStart = () => { 
    return (dispatch, getStore) => {
        dispatch(game.actions.generateLoading(true))
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: getStore().game.username}) 
        })
                .then(res => res.json())
                .then(data => {
                    dispatch(game.actions.generateGame(data));
                    dispatch(game.actions.generateLoading(false));
                })
    }
}

// Fetch coordinates, description & direction
export const generateNewDirection = (action) => {    
    return (dispatch, getStore) => {
        dispatch(game.actions.generateLoading(true))
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: getStore().game.username, 
                type: action.type, 
                direction: action.direction })
        })
                .then(res => res.json())
                .then(data => {
                    dispatch(game.actions.generateGame(data));
                    dispatch(game.actions.generateLoading(false));
                })
    };
};



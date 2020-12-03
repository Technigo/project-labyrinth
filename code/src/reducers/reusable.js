import { game } from './game';

export const generateGameStart = () => { 
    return (dispatch, getStore) => {
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: getStore().game.username })
        })
                .then(res => res.json())
                .then(data => dispatch(game.actions.generateGameStart(data)));
    }
}

export const generateNewDirection = (a) => {    
   
    return (dispatch, getStore) => {
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: getStore().game.username, 
                type: a.type, 
                direction: a.direction })
        })
                .then(res => res.json())
                .then(data => dispatch(game.actions.generateGameStart(data)));
    }
}
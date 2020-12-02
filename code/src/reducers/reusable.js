
import { game } from './game';


export const generateGameStart = () => { 
    console.log('testing')   
    return (dispatch, getState) => {
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: "ni"})
        })
                .then(res => res.json())
                .then(data => dispatch(game.actions.generateDirection(data)));
    }
}

export const generateNewDirection = () => {    
    return (dispatch, getState) => {
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: "ni", type: 'move', direction: 'East' })
        })
                .then(res => res.json())
                .then(data => dispatch(game.actions.generateDirection(data)));
     }
}
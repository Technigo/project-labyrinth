import React from 'react';
import { game } from './game';
import { useSelector } from 'react-redux';


export const generateGameStart = (username) => { 
    
    console.log(username)   
    return (dispatch, getState) => {
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: username })
        })
                .then(res => res.json())
                .then(data => dispatch(game.actions.generateGameStart(data)));
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
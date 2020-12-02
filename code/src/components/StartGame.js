import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { rooms } from 'reducers/rooms'

const username = "NewUserClaudiaAxel133781"
const START_URL = "https://wk16-backend.herokuapp.com/start";
const ACTION_URL = "https://wk16-backend.herokuapp.com/action";
const startGameFetchInfo = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: username })
}
const continueGameFetchInfo = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: username, 
    type: "move", 
    direction: "East"
  })
}

export const StartGame = () => {
  const dispatch = useDispatch();

  const room = useSelector(store => store.rooms)

  const startGame = () => {
    // Fetcha, och sedan skicka in responsen (data) till setGameState. Typ.
    fetch(START_URL, startGameFetchInfo)
      .then(response => response.json())
      .then(data => 
        // OK SÅ DEN HÄR SÄTTER GAMESTATE TILL DET FÖRSTA. NAJS.
        dispatch(rooms.actions.setGameState(data))
      )
  }
  const continueGame = (direction) => {
    console.log("direction: " + direction)
    fetch(ACTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username, 
        type: "move", 
        direction: direction
      })
    })
      .then(response => response.json())
      .then(data => 
        dispatch(rooms.actions.setGameState(data))
      )
  }

  return (
    <>
      <h1>Welcome to the game!</h1>
      <button onClick={() => startGame()}>Start game</button>
      {/*  */}
      <div className="actions">Actions:
      {room.gameState.actions.map(action => 
        <button onClick={() => continueGame(action.direction)}>{action.direction}</button>)}
      </div>
      <div className="coordinates">Coordinates: {room.gameState.coordinates}</div>
      <div className="descriptions">Description: {room.gameState.description}</div>
    </>
  )
}
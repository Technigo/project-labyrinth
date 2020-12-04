import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { rooms } from '../reducers/rooms'
import { loader } from '../reducers/loader'

import arrow_one from '../assets/arrow-one.svg'
import arrow_split from '../assets/arrow-split.svg'

export const Game = () => {
  // Define some base variables
  const username = useSelector(store => store.rooms.username)
  const room = useSelector(store => store.rooms)
  // We'll use this variable to check if things are loading or not.
  const isLoading = useSelector(store => store.loader.isLoading)
  const dispatch = useDispatch();
  const START_URL = "https://wk16-backend.herokuapp.com/start";
  const ACTION_URL = "https://wk16-backend.herokuapp.com/action";
  const startGameFetchInfo = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username
    })
  }

  // This function starts the game, by doing the first fetch from the API.
  const startGame = () => {
    dispatch(loader.actions.setLoading(true))
    // Fetcha, och sedan skicka in responsen (data) till setGameState. Typ.
    fetch(START_URL, startGameFetchInfo)
      .then(response => response.json())
      .then(data => {
        // Pass "data" (the response from the API containing the coordinates, direction, etc) to the Game State.
        dispatch(rooms.actions.setGameState(data))
        dispatch(loader.actions.setLoading(false))
      })
  }

  // This function is called on each click of a "Direction" button – i.e. the buttons in each action box with north, east, west or south.
  const continueGame = (direction) => {
    dispatch(loader.actions.setLoading(true))
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
      .then(data => {
        dispatch(rooms.actions.setGameState(data))
        dispatch(loader.actions.setLoading(false))
      })
  }

  // This will make it run only the first time the component mounts. 
  // "You can use the useEffect hook to run a function when the component has been mounted. By giving it an empty array as second argument it will only be run after the initial render."
  useEffect(() => {
    startGame();
  }, []);

  return (
    <>
      <div className="box-description">
        <p>{room.gameState.coordinates}</p>
        <p className="spacer-description">◆</p>
        <p>"{room.gameState.description}"</p>
      </div>

      {
        (room.gameState.actions.length === 1)
          ? <img src={arrow_one} alt="arrow" />
          : null
      }
      {
        (room.gameState.actions.length === 2)
          ? <img src={arrow_split} alt="arrow" />
          : null
      }
      {
        (room.gameState.actions.length === 0)
          ? <><h2 className="gameover-text">Game over!</h2><button onClick={() => window.location.reload()}>&gt; Restart game</button></>
          : null
      }

      <div className="container-actions">
        {/* // For every action that's possible, push out a "box-action" box – the box containing an action description and direction. */}
        {room.gameState.actions.map((action, index) =>
          <div className="box-action">
            <p>"{action.description}"</p>
            {/* WHAT'S THE KEY? */}
            {/* When clicking, run the "continueGame" function, and pass the direction as an argument. */}
            <button
              key={action.direction}
              // If the game is loading (using the global "isLoading" variable), set disabled to true to prevent multiple clicks.
              disabled={isLoading}
              onClick={() => continueGame(action.direction)}
            >
              {/* &gt; (gt = greater than) is the HTML entity for printing a ">" character, since the buttons have one of those. */}
              &gt; {action.direction}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
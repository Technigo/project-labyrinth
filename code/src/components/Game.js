import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { rooms } from '../reducers/rooms'
import { loader } from '../reducers/loader'

import arrow_one from '../assets/arrow-one.svg'
import arrow_split from '../assets/arrow-split.svg'

export const Game = () => {
  const username = useSelector(state => state.rooms.username)

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

  const startGame = () => {
    console.log("Kör startGame")
    
    dispatch(loader.actions.setLoading(true))
    // Fetcha, och sedan skicka in responsen (data) till setGameState. Typ.
    fetch(START_URL, startGameFetchInfo)
      .then(response => response.json())
      .then(data => {
        console.log("Ok the data is: ")
        console.log(data)
        // OK SÅ DEN HÄR SÄTTER GAMESTATE TILL DET FÖRSTA. NAJS.
        dispatch(rooms.actions.setGameState(data))
        dispatch(loader.actions.setLoading(false))
      })
  }

  const continueGame = (direction) => {
    console.log("Kör continueGame")
    console.log("direction: " + direction)
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
        // If there's one action, display the arrow image with only one arrow. Else, the split arrow.
        (room.gameState.actions.length === 1) ? <img src={arrow_one} alt="arrow" /> : <img src={arrow_split} alt="arrow" />
      }

      <div className="container-actions">
        {room.gameState.actions.map((action, index) =>
          <div className="box-action">
            <p>"{action.description}"</p>
            <button 
              key={action.direction} 
              // If it's loading, set disabled to true
              disabled={isLoading}
              onClick={() => continueGame(action.direction)}
            >
                &gt; {action.direction}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
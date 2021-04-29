import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import game, { continueGame } from '../reducers/game'

export const GameScreen = () => {
  const gameData = useSelector((store) => store.game.gameData)
  const history = useSelector((store) => store.game.history)
  const dispatch = useDispatch()
  const onContinueGame = (direction) => {
    dispatch(continueGame(direction))
  }

  const onGoBack = () => {
    dispatch(game.actions.setPreviousStep())
  }

  const onReset = () => {
    dispatch(game.actions.setResetGame())
    console.log('onReset')
  }

  if (gameData) {
    return (
      <main>
        <button 
        className={!history.length > 0 ? "nes-btn is-disabled" : "nes-btn is-warning"}
        onClick={onGoBack} 
        // disabled={!history.length > 0}
        >
          Run back!
        </button>
        <p>{gameData.coordinates}</p>
        <p>{gameData.description}</p>
        {gameData.actions.map((action) => {
          return (
            <div>
              <h4>{action.description}</h4>
              <button 
              className="nes-btn is-primary"
              onClick={() => onContinueGame(action.direction)}>
                {action.direction}
              </button>
            </div>
          )
        })}
        <button 
        class="nes-btn is-error"
        onClick={onReset}
        >
          restart
        </button>
      </main>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

// export default GameScreen;

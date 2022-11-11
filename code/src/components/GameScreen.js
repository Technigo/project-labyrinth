/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react'
import { MainContainer, GameWrapper } from 'Globalstyles'
import { useDispatch, useSelector } from 'react-redux'
import { continueGame, labyrinth, startTheGame } from 'reducers/labyrinth'
// import { GameOver } from 'components/GameOver'

export const GameScreen = () => {
  const dispatch = useDispatch()
  const { description, actions, coordinates } = useSelector((store) => store.labyrinth.currentDirection)
  const userName = useSelector((store) => store.labyrinth.userName)
  // const gameOver = actions.length === 0

  useEffect(() => {
    startTheGame();
  }, []);

  const restartGame = () => {
    dispatch(labyrinth.actions.restartGame())
  }
  const goToNextStep = () => {
    dispatch(continueGame())
  }

  /* if (gameOver) {
    return (
      <GameOver />
    )
  } else {
 */
  return (
    <MainContainer>
      <GameWrapper>
        <h2>Player: {userName}</h2>
        <p>{description}{coordinates}</p>
        {actions.map((action) => {
          return (

            <label key={action.direction} htmlFor="nextBtn">
              <button
                key={action.direction}
                type="button"
                id="nextBtn"
                onClick={goToNextStep}>{action.description}
              </button>
            </label>
          )
        })}

      </GameWrapper>

      <button type="button" onClick={restartGame}>Restart from beginning?</button>
    </MainContainer>

  )
};
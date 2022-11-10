/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { MainContainer, GameWrapper } from 'Globalstyles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { continueGame, labyrinth } from 'reducers/labyrinth'
import { GameOver } from 'components/GameOver'

export const GameScreen = () => {
  const dispatch = useDispatch()

  const userName = useSelector((store) => store.labyrinth.userName)
  const gameOver = useSelector((store) => store.labyrinth.gameOver)

  const restartGame = () => {
    dispatch(labyrinth.actions.restartGame())
  }
  const goToNextStep = () => {
    dispatch(continueGame())
  }

  if (gameOver) {
    return (
      <GameOver />
    )
  } else {
    return (
      <MainContainer>
        <GameWrapper>
          <h2>Player: {userName}</h2>
          <label htmlFor="nextBtn">
            <button
              type="button"
              id="nextBtn"
              onClick={goToNextStep}>Directions
            </button>
          </label>

        </GameWrapper>

        <button type="button" onClick={restartGame}>Restart from beginning?</button>
      </MainContainer>

    )
  }
};
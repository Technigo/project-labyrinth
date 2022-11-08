/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { MainContainer, GameWrapper } from 'Globalstyles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateAction } from 'reducers/labyrinth'
import { GameOver } from 'components/GameOver'

export const GameScreen = () => {
  const dispatch = useDispatch()

  const whichWay = useSelector((store) => store.labyrinth.steps) // ?
  const gameOver = useSelector((store) => store.todos.gameOver)

  const goToNextStep = () => {
    dispatch(generateAction())
  }

  if (gameOver) {
    return (
      <GameOver />
    )
  } else {
    return (
      <MainContainer>
        <GameWrapper>
          {whichWay.map((action) => {
            return (
              <label htmlFor="nextBtn">
                <button
                  type="button"
                  id="nextBtn"
                  key={action}
                  onClick={goToNextStep} />
              </label>
            /* description of fetched actions on each button? */
            )
          })}
        </GameWrapper>
      </MainContainer>
    )
  }
};
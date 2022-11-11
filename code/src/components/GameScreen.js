/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { MainContainer, GameWrapper } from 'Globalstyles'
import { useDispatch, useSelector } from 'react-redux'
import { labyrinth, continueGame } from 'reducers/labyrinth'
import { Loading } from './Loading'
// import { GameOver } from 'components/GameOver'

export const GameScreen = () => {
  const dispatch = useDispatch()
  const description = useSelector((store) => store.labyrinth.description)
  // const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const moves = useSelector((store) => store.labyrinth.moves)
  /*   const direction = useSelector((store) => store.labyrinth.direction) */
  const loading = useSelector((store) => store.labyrinth.loading)
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const history = useSelector((store) => store.labyrinth.history)

  const goBack = () => {
    dispatch(labyrinth.actions.setPreviousMove)
  }
  const restartGame = () => {
    dispatch(labyrinth.actions.restartGame())
  }
  const goToNextStep = (event) => {
    dispatch(labyrinth.actions.setDirection(event.target.value))
    dispatch(continueGame())
  }

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <MainContainer>
        <GameWrapper>
          <div>
            {console.log('history', history)}
            <p>{coordinates}</p>
            <p>{description}</p>
            {moves && moves.map((action) => {
              return (

                <label key={action.direction} htmlFor="nextBtn">
                  <button
                    key={action.direction}
                    type="button"
                    id="nextBtn"
                    value={action.direction}
                    onClick={(event) => goToNextStep(event)}>{action.direction}
                  </button>
                </label>
              )
            })}
          </div>
          <button type="button" onClick={goBack}>Go back</button>
        </GameWrapper>
        <button type="button" onClick={restartGame}>Restart from beginning?</button>
      </MainContainer>

    )
  }
};
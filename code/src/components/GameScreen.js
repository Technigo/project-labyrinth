/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { GameWrapper } from 'Globalstyles'
import { useDispatch, useSelector } from 'react-redux'
import { labyrinth, continueGame } from 'reducers/labyrinth'
import { Loading } from './Loading'

export const GameScreen = () => {
  const dispatch = useDispatch()
  const description = useSelector((store) => store.labyrinth.description)
  const moves = useSelector((store) => store.labyrinth.moves)
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
      <GameWrapper>
        <div>
          {console.log('history', history)}
          <p>{coordinates}</p>
          <p>{description}</p>
        </div>
        <div>
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

        {/* displays only when you are out */}
        {moves.length === 0 && (
          <div className="gameEnd">
            <p>Woho! You have made it out of the labyrinth!</p>
          </div>
        )}
        {/*-*/}

        <button type="button" onClick={goBack}>Go back</button>
        <button type="button" onClick={restartGame}>Restart from beginning?</button>
      </GameWrapper>

    )
  }
};
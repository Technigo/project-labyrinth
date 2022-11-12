/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { GameWrapper } from 'components/Styles/Globalstyles'
import { DescriptionWrapper, DirectionBtn, RestartBtn, GoBackBtn, Direction } from 'components/Styles/GameScreen.Styles'
import { useDispatch, useSelector } from 'react-redux'
import { labyrinth, continueGame } from 'reducers/labyrinth'
import Lottie from 'react-lottie';
import * as animationData from '../../lotties/81812-bat-halloween';
import { Loading } from './Loading'
import arrow from '../../assets/arrow.png'

export const GameScreen = () => {
  const dispatch = useDispatch()
  const description = useSelector((store) => store.labyrinth.description)
  const moves = useSelector((store) => store.labyrinth.moves)
  const loading = useSelector((store) => store.labyrinth.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

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
      <>
        <GameWrapper>
          <DescriptionWrapper>
            <p>{description}</p>
            <Lottie
              id="Lottie"
              options={defaultOptions}
              height={100}
              width={100}
              style={{ position: 'absolute',
                right: '-70px',
                top: '-45px',
                transform: 'rotate(30deg)' }} />
          </DescriptionWrapper>

          <Direction>
            {moves && moves.map((action) => {
              return (
                <label
                  htmlFor="nextBtn"
                  key={action.direction}
                  // different id's depending on direction, to style placement of button in CSS
                  id={action.direction.includes('North')
                    ? 'North'
                    : action.direction.includes('South')
                      ? 'South'
                      : action.direction.includes('East')
                        ? 'East'
                        : action.direction.includes('West')
                          ? 'West'
                          : 'None'}>
                  <img src={arrow} alt="gps" />
                  <DirectionBtn
                    key={action.direction}
                    type="button"
                    id="nextBtn"
                    value={action.direction}
                    onClick={(event) => goToNextStep(event)}>Go {action.direction}
                  </DirectionBtn>
                </label>

              )
            })}
          </Direction>
          {/* displays only when you are out */}
          {moves.length === 0 && (
            <p>Woho! You have made it out of the labyrinth!</p>
          )}
          {/*-*/}

        </GameWrapper>

        <GoBackBtn id="goBack" onClick={goBack}><label htmlFor="goBack">&#60; Go back</label></GoBackBtn>
        <RestartBtn id="restart" onClick={restartGame}><label htmlFor="goBack">Restart &#8634;</label></RestartBtn>
      </>
    )
  }
};
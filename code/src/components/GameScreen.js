import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import labyrinth, { continueGame } from 'reducers/labyrinth'
import {
  bg0_0,
  bg0_1,
  bg0_2,
  bg0_3,
  bg1_0,
  bg1_1,
  bg1_3,
  bg_start
} from 'styles/BackgroundURLs'


export const GameScreen = () => {
  const dispatch = useDispatch()

  const coordinates = useSelector(store => store.labyrinth.currentStep.coordinates)

  const currentStep = useSelector(store => store.labyrinth.currentStep)
  const currentStepActions = useSelector(store => store.labyrinth.currentStep.actions)
  const history = useSelector(store => store.labyrinth.history)

  return (
    <Section>
      <MainDescription coordinates={coordinates}>
        <h3>{currentStep.description}</h3>
      </MainDescription>
      <ActionsBox>
      {currentStepActions.map(action => (
        <Action key={action.direction}>
          <button onClick={() => dispatch(continueGame(action.direction))}>Go {action.direction}</button>
          <p>To the {action.direction}: {action.description}</p>
        </Action>
      ))}
      </ActionsBox>
      {history.length ?
        <History>Your moves: {history.map((move, index) => (
          <span key={index}> ⇒ {move}</span>
        ))}</History>
        :
        ''}
      {!currentStepActions.length &&
        <button onClick={() => dispatch(labyrinth.actions.restartGame())}>Restart</button>}
    </Section>
  )
}

export default GameScreen

const Section = styled.section`
  display: flex;
  height: 500px;
  width: 300px;
  flex-direction: column;
`

const MainDescription = styled.div`
  background-size: cover;
    background-image: ${(props) =>
      props.coordinates === '0,0'
        ? bg0_0
        : props.coordinates === '0,1'
          ? bg0_1
          : props.coordinates === '0,2'
            ? bg0_2
            : props.coordinates === '0,3'
              ? bg0_3
              : props.coordinates === '1,0'
                ? bg1_0
                : props.coordinates === '1,1'
                  ? bg1_1
                  : props.coordinates === '1,3'
                    ? bg1_3 :
                    bg_start};
`

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
`

const Action = styled.div`
  display: flex;
`

const History = styled.div`
  display: flex;
`
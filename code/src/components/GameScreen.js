import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
  faCircleArrowDown, 
  faCircleArrowLeft, 
  faCircleArrowRight, 
  faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'styles/GlobalStyling'

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

  const arrowToUse = (move) => {
    if (move === 'North') {
      return faCircleArrowUp
    } else if (move === 'East') {
      return faCircleArrowRight
    } else if (move === 'South') {
      return faCircleArrowDown
    } else if (move === 'West') {
      return faCircleArrowLeft
    }
  }

  return (
    <>
      <MainDescription actions={currentStepActions.length} coordinates={coordinates}>
        <h3>{currentStep.description}</h3>
        {!currentStepActions.length &&
        <Button onClick={() => dispatch(labyrinth.actions.restartGame())}>Restart</Button>}

        {history.length ?
        <History>
          {history.map((move, index) => (
            <FontAwesomeIcon icon={arrowToUse(move)} key={index} />
          ))}
        </History>
        :
        ''}
      </MainDescription>
      {currentStepActions.length ?
      <ActionsBox>
        {currentStepActions.map(action => (
          <Action key={action.direction}>
            <ActionButton onClick={() => dispatch(continueGame(action.direction))}>Go {action.direction}</ActionButton>
            <p>To the {action.direction}: {action.description}</p>
          </Action>
        ))}
      </ActionsBox> : ''}
      
    </>
  )
}

export default GameScreen

const MainDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
  border-radius: ${(props) =>
    props.actions === 0 ? '5px' : '5px 5px 0 0'
  };
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
  
  & h3 {
    text-align: center;
    padding: 10px;
    margin: 10px;
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 5px;
  }
`

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px 10px;
`

const Action = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;

  & p {
    margin: 0;
  }
`

const ActionButton = styled(Button)`
height: 50px;
    margin-right: 10px;
`

const History = styled.div`
  display: flex;
  justify-content: left;
  margin: 10px;

  svg {
      margin-right: 3px;
      color: white;
  }
`
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from 'reducers/game'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { game } from '../reducers/game'
import { Loader } from './Loader'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 15px;
  margin: 0 auto;
  background-color: lightgrey;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 6px;
`

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap; 10px;
`

const Button = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 6px;
  font-family: IBM Plex Mono;
  font-weight: bold;
  margin-top: 10px;
`

const StartOverButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 6px;
  font-family: IBM Plex Mono;
  font-weight: bold;
  background-color: #d68c7c;
  margin-top: 30px;
  display: flex;
  align-items: center;
`

export const CurrentStep = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector(store => store.game.currentStep)
  // const steps = useSelector((store) => store.game.steps);
  const loading = useSelector(store => store.ui.loading)
  let navigate = useNavigate()

  const onRestart = () => {
    dispatch(game.actions.restartGame())
    navigate('/')
  }

  return (
    <GameContainer>
      {loading && <Loader />}
      {!loading && (
        <Container>
          <p>Coordinates: {currentStep?.coordinates}</p>
          <p>{currentStep?.description}</p>
          {currentStep?.actions?.map(action => {
            return (
              <ButtonContainer key={action.direction}>
                <p>{action.description}</p>
                <Button onClick={() => dispatch(nextStep(action))}>Go {action.direction}</Button>
              </ButtonContainer>
            )
          })}
        </Container>
      )}
      <StartOverButton onClick={onRestart}>Start over</StartOverButton>
    </GameContainer>
  )
}

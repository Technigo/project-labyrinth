import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, navigateWithKeys } from 'reducers/game'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { game } from '../reducers/game'
import { Loader } from './Loader'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 260px;
  padding: 15px;
  margin: 0 auto;
  background-color: lightgrey;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 6px;
  gap: 10px;
  & p {
    margin: 5px 0 15px 0;
  }

  @media (min-width: 375px) {
    max-width: 300px;
  }
  @media (min-width: 735px) {
    max-width: 600px;
  }
`

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px dashed grey;
  &:last-child {
    margin-top: 10px;
  }
  & p {
    margin: 10px 0;
  }
`

const Button = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 6px;
  font-family: IBM Plex Mono;
  font-weight: bold;
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
  const loading = useSelector(store => store.ui.loading)
  let navigate = useNavigate()

  // const onNavigate = e => {
  //   let nextAction = undefined
  //   if (e.key === 'ArrowUp') {
  //     nextAction = currentStep?.actions?.find(action => action.direction === 'North')
  //   } else if (e.key === 'ArrowDown') {
  //     nextAction = currentStep?.actions?.find(action => action.direction === 'South')
  //   } else if (e.key === 'ArrowLeft') {
  //     nextAction = currentStep?.actions?.find(action => action.direction === 'West')
  //   } else if (e.key === 'ArrowRight') {
  //     nextAction = currentStep?.actions?.find(action => action.direction === 'East')
  //   }
  //   if (nextAction) {
  //     console.log(nextAction)
  //     dispatch(nextStep(nextAction))
  //   }
  // }

  useEffect(() => {
    window.addEventListener('keydown', e => dispatch(navigateWithKeys(e)))
    return () => {
      window.removeEventListener('keydown', e => dispatch(navigateWithKeys(e)))
    }
  }, [dispatch])

  const onRestart = () => {
    dispatch(game.actions.restartGame())
    navigate('/')
  }

  return (
    <GameContainer>
      {loading && <Loader />}
      {!loading && (
        <Container>
          <p>{currentStep?.description}</p>
          {currentStep?.actions?.map(action => {
            return (
              <ButtonContainer key={action.direction}>
                <p>{action.description}</p>
                <Button onClick={() => dispatch(nextStep(action))}>
                  Go{' '}
                  {action.direction === 'North'
                    ? action.direction + ' ⬆' //&#8593;
                    : action.direction === 'South'
                    ? action.direction + ' ⬇' //&#8595;
                    : action.direction === 'West'
                    ? action.direction + ' ⬅' //&#8594;
                    : action.direction === 'East'
                    ? action.direction + ' ➡' //&#8592;
                    : ''}
                </Button>
              </ButtonContainer>
            )
          })}
        </Container>
      )}
      <StartOverButton onClick={onRestart}>Start over</StartOverButton>
    </GameContainer>
  )
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { games, CarryOnGame } from '../reducers/games'
import { Container } from '../styling/GlobalStyling'
import EndScreen from './EndScreen'

const GameScreen = () => {
  const actions = useSelector(store => store.games.gameStatus.actions)
  const history = useSelector(store => store.games.history)

  const dispatch = useDispatch()

  const onGoBack = () => {
    dispatch(games.actions.setPreviousGameStatus())
  }

  if (actions?.length === 0) {
    return (
        <EndScreen />
    )
  }

  return (
    <Container>
        {actions?.map( (action, index) => (
            <GameDescriptionContainer key={index}>
              <GameScreenText>{action.description}</GameScreenText>
              <button
                  className="nes-btn"
                  onClick={() => dispatch(CarryOnGame(action.direction))}>
                      {action.direction}
              </button>
            </GameDescriptionContainer>
          )
        )}
      <button
        className="nes-btn"
        disabled={!history.length} 
        onClick={onGoBack}
      >
        Go back
      </button>
    </Container>
  )
}

const GameScreenText =styled.p`
  text-align: center;
  margin: 0 0 30px 0;
`
const GameDescriptionContainer = styled.div`
    margin: 20px 10px 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default GameScreen
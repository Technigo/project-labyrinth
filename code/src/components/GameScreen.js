import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { games, CarryOnGame } from '../reducers/games'
import { Container } from '../styling/GlobalStyling'

const GameScreen = () => {
  const userName = useSelector(store => store.games.username)
  const actions = useSelector(store => store.games.gameStatus.actions)
  const history = useSelector(store => store.games.history)
  // console.log(history) // history is object

  const dispatch = useDispatch()

  const onGoBack = () => {
    dispatch(games.actions.setPreviousGameStatus())
  }
  //The optional chaining operator (?.) 
  //enables you to read the value of a property located deep within 
  //a chain of connected objects without having to check that each reference 
  //in the chain is valid.

  return (
    <Container>
      <h3>{userName.description}</h3>
        {actions?.map( (action, index) => (
            <GameDescriptionContainer key={index}>
              <p>{action.description}</p>
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


const GameDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default GameScreen
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'

import games, { generateQuestion } from '../reducers/games'

const GameScreen = () => {
  const description = useSelector(store => store.games.description)
  const moves = useSelector(store => store.games.moves)
  const dispatch = useDispatch()

  const onChooseDirection = (event) => {
    dispatch(games.actions.setDirection(event.target.value))
    dispatch (generateQuestion())
  }

  return(
    <Background>
    <OuterWrapper>
      {description}
      {games.coordinates}
      <Container>
        {moves && moves.map(move => (
          <InnerContainer key={move.description}>
            <p>{move.description}</p>
            <button 
              value={move.direction}
              onClick={(event) => onChooseDirection(event)}>
                Go {move.direction}
            </button>
        </InnerContainer>
        ))
        }
      </Container>
    </OuterWrapper>
    </Background>
  )
}

export default GameScreen

const Background = styled.div`
  background-image: url('https://images.unsplash.com/photo-1581157505478-f95a2ad6cb93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;

  @media (min-width: 767px){
    background-image: url('https://images.unsplash.com/photo-1572587356426-b33bf42f999b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80');
  }
`
const OuterWrapper = styled.div`
  width: 100%;
`
const Container = styled.div`
  border: solid black 3px;
  margin-top: 30px;
`
const InnerContainer = styled.div`
  border: solid green 3px;
`
const Button = styled.button `
  
`

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import games, { generateQuestion } from '../reducers/games'

const GameScreen = () => {
  const description = useSelector(store => store.games.description)
  const moves = useSelector(store => store.games.moves)
  const history = useSelector(store => store.games.history)
  // const coordinates = useSelector(store => store.games.coordinates)
  
  const dispatch = useDispatch()

  const onChooseDirection = (event) => {
    dispatch(games.actions.setDirection(event.target.value))
    dispatch(generateQuestion())
  }
  
  const onMovesRevert = () => {
    dispatch(games.actions.setPreviousMove())
  }

  const onRestartButton = () => {
    dispatch(games.actions.setUserName(''))
    window.location.reload()
  }

  return(
    <Background>
      <ButtonContainer>
        <BackButton
          disabled={!history.length}
          onClick={onMovesRevert}>
            Go back
        </BackButton>
        <RestartButton
          onClick={onRestartButton}>
          Restart
        </RestartButton>
      </ButtonContainer>
      <OuterContainer>
        {description}
        {moves && moves.map(move => (
          <InnerContainer key={move.description}>
            <p>{move.description}</p>
            <Button 
              value={move.direction}
              onClick={(event) => onChooseDirection(event)}>
                Go {move.direction}
            </Button>
        </InnerContainer>
        ))
        }
        {/* {coordinates === '0,0' && (
          <div>
          <img src="https://images.unsplash.com/photo-1566953483968-d3937956938e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=616&q=80" alt="cave"/>
          </div>
        )} */}
      </OuterContainer>
    </Background>
  )
}

export default GameScreen

const Background = styled.div`
  // background-image: url('https://images.unsplash.com/photo-1581157505478-f95a2ad6cb93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80');
  background-image: url('https://images.unsplash.com/photo-1585194328937-30ffb4529e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  color: #FFF;

  @media (min-width: 767px){
    background-image: url('https://images.unsplash.com/photo-1572587356426-b33bf42f999b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80');
  }
`
const OuterContainer = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;

  @media (min-width: 767px){
    width: 500px;
    margin-top: 30px;
  }
`
const InnerContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 22px 0;

  @media (min-width: 767px){
    padding: 40px 35px 0;
  }
`
const Button = styled.button`
  border: none;
  color: #FFF;
  font-weight: bold;
  margin-top: 20px;
  background: none;
  border: solid 2px #FFF;
  padding: 7px 14px;

  :hover {
    color: #000;
    background-color: #FFF;
  }
`
const BackButton = styled(Button)`
  margin: 0;
`

const RestartButton = styled(Button)`
  margin: 0;
`

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import games, { generateQuestion } from '../reducers/games'

const GameScreen = () => {
  const description = useSelector(store => store.games.description)
  const moves = useSelector(store => store.games.moves)
  const history = useSelector(store => store.games.history)
  const coordinates = useSelector(store => store.games.coordinates)
  
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
        {history.length
          ? <BackButton
          onClick={onMovesRevert}>
            GO BACK
          </BackButton>
          : <></>
        }
        <RestartButton
          onClick={onRestartButton}>
          RESTART
        </RestartButton>
      </ButtonContainer>
      <OuterContainer>
        <Text>{description}</Text>
        {moves && moves.map(move => (
          <InnerContainer key={move.description}>
            <Text>{move.description}</Text>
            <Button 
              value={move.direction}
              onClick={(event) => onChooseDirection(event)}>
                Go {move.direction}
            </Button>
          </InnerContainer>
          ))
          }  
          {coordinates === '1,3' && (
            <Diamond />
          )}
        </OuterContainer>
      </Background>
  )
}

export default GameScreen

const Background = styled.div`
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
const OuterContainer = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;

  @media (min-width: 767px){
    width: 500px;
    margin-top: 20px;
  }
`
const InnerContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const Text = styled.p`
  @media (min-width: 767px){
    font-size: 19px;
    font-weight: bold;
  }
`
const Diamond = styled.div`
  border-style: solid;
  border-color: transparent transparent #FFF transparent;
  border-width: 0 25px 25px 25px;
  height: 0;
  width: 50px;
  box-sizing: content-box;
  position: relative;
  margin: 60px 0 50px 0;

  &:after {
    content: "";
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #FFF transparent transparent transparent;
    border-width: 70px 50px 0 50px;
  }
`

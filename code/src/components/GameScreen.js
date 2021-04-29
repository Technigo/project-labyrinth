import React from 'react'
import styled from "styled-components/macro"
import { useSelector, useDispatch } from 'react-redux'

import labyrinth from 'reducers/labyrinth'
import { GameCard } from './GameCard' 

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
  background: rgb(255,255,255, 0.7);
  margin-bottom: 20px;
  width: 70%;
  padding: 20px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
`;

const CustomButton = styled.button`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
  background-color: whitesmoke;
  margin: 10px 0 10px 0;
  padding: 10px;
  cursor: pointer;
`;


const GameScreen = () => {
  const actions = useSelector(store => store.labyrinth.actions)
  const history = useSelector(store => store.labyrinth.history)

  const dispatch = useDispatch()

  const onRevertDirection = () => {
    dispatch(labyrinth.actions.setPreviousAction())
  }

  return (
    <Container>
      <h1>Hello there...</h1>
      <h2>{actions.description}</h2>
      <h4>Choose your direction</h4>
      <CardsContainer>
        {actions.actions.map(action => (
            <GameCard 
              action={action}
              key={action.description}
            />         
        )
        )}
      </CardsContainer>  
      {history.length > 1 &&   //this logic should be OK, need to fix history logic in labyrinth
        <CustomButton onClick={() => onRevertDirection()} >
          Go back
        </CustomButton>
      }
    </Container>

    //render an option-card component for each directions choice
    // use damians card component from code-along?
  )
}
export default GameScreen
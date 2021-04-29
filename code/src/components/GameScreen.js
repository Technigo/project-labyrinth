import React from 'react'
import styled from "styled-components/macro"
import { useSelector, useDispatch } from 'react-redux'

import labyrinth from 'reducers/labyrinth'
import { GameCard } from './GameCard' 

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
  background: rgb(246,226,189, 0.5);
  margin: 20px 0;
  width: 70%;
  padding: 20px;
  color: #3b2e36;
  text-align: center;
`;

const MainHeading = styled.h2`
  margin: 0;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1024px) {
    font-size: 28px;
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
  
  }
`;

const CustomButton = styled.button`
  border-radius: 6px;
  border: 2px solid #3b2e36;
  background-color: rgb(82,88,13, 0.7);
  margin: 10px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  font-family: 'New Tegomin', serif;

  @media (min-width: 768px) {
    font-size: 22px;
    padding: 5px 15px;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }
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
      <MainHeading>{actions.description}</MainHeading>
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
          GO BACK
        </CustomButton>          
    
      }
    </Container>

    //render an option-card component for each directions choice
    // use damians card component from code-along?
  )
}
export default GameScreen
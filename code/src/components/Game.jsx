import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import { continueGame } from "../reducers/game";
import { EndPage } from "./EndPage";

// GAMECARD STYLES

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0.5rem 0 2rem 0;
 
`;

const ContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 90%;
  @media (min-width: 800px){
    width: 60%;
  }
  @media (min-width: 1020px){
    width: 50%;
  }
`;


const Coordinates = styled.p`
font-size: 0.75rem;
letter-spacing: 2px;
padding: 1rem;
border-radius: 0.3rem;
background-color: #fbd000;
text-align: left; 
@media (min-width: 800px){
  font-size: 1rem;
}
@media (min-width: 1020px){
  font-size: 1.25rem;
}
`;

const GameText = styled.p`
font-size: 0.65rem;
background-color: #e52521;
color: #f7f7f7;
letter-spacing: 2px;
padding: 0.5rem 1rem;
@media (min-width: 800px){
  font-size: 0.75rem;
}
@media (min-width: 1020px){
  font-size: 1rem;
}
`;

// CARD GREJ 

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; 

const Description = styled.p`
  font-size: 0.65rem;
  background-color: #f7f7f7;
  letter-spacing: 2px;
  border: solid 3px #43b047;
  padding: 0.5rem 1rem;
  @media (min-width: 800px){
    font-size: 0.75rem;
  }
  @media (min-width: 1020px){
    font-size: 1rem;
  }
`;

const GameButton = styled.button`
  width:100%;
  margin-top: 0.5rem;
  color: #000;
  background-color: #fbd000;
  padding: 0.75rem 2rem;
`;

// CARD GREJ 

export const Game = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );

  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(continueGame(type, direction));
  };

  const GameCard = ({ description, type, direction }) => (
    <CardContainer >
      <Description>{description}</Description>
      <GameButton onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </GameButton>
    </CardContainer>
  );

  return (
    <>
      <GameContainer>
        <ContainerContainer>
          <Coordinates>Coordinates: {coordinates}</Coordinates>
          <GameText>{description}</GameText>
          {actions.length === 0 && <EndPage />}
          {actions.length > 0 &&
            actions.map((item) => <GameCard key={item.direction} {...item} />)}
        </ContainerContainer>
      </GameContainer>
    </>
  );
};
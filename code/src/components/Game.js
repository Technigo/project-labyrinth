import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { continueGame } from "../reducers/game";

const GameContainer = styled.div`
display: flex;
flex-direction: column;
justify-content; center; 
text-align: center; 
margin: 10px;
padding-top: 15px;
padding-right: 10px;
padding-bottom: 15px;
padding-left: 10px;
`;

const CoordinatesText = styled.p`
  font-size: 0.5em;
`;

const HeadText = styled.h1`
  font-size: 1em;
  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;

//ActionCard styling
const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content; center; 
text-align: center; 
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
border-radius: 6px;
background-color: rgb(171, 236, 243);
margin: 10px;
padding-top: 15px;
padding-right: 10px;
padding-bottom: 15px;
padding-left: 10px;
`;

const DescText = styled.p`
  font-family: Roboto;
  font-size: 16px;
`;

const SubmitButton = styled.button`
padding 10px;
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  font-family: "Press Start 2P", cursive;
`;

export const Game = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );

  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(continueGame(type, direction));
  };

  const ActionCard = ({ description, type, direction }) => (
    <CardContainer>
      <DescText>{description}</DescText>
      <SubmitButton onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </SubmitButton>
    </CardContainer>
  );

  return (
    <>
      <GameContainer>
        <CoordinatesText>Coordinates: {coordinates}</CoordinatesText>
        <HeadText>{description}</HeadText>
        {actions.length === 0 && <h3>Yay, you made it out!</h3>}
        {actions.length > 0 &&
          actions.map((item) => <ActionCard key={item.direction} {...item} />)}
      </GameContainer>
    </>
  );
};

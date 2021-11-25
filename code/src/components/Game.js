import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { continueGame } from "../reducers/game";
import { EndPage } from "./EndPage";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  font-family: "Lobster Two", cursive;
  font-size: 1.5em;
  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;

//ActionCard styling
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  margin: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  padding-left: 10px;
`;

const DescText = styled.p`
  font-family: "Play", sans-serif;
  font-size: 16px;
`;

const SubmitButton = styled.button`
width: fit-content;
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

  const handleColorSwitch = () => {
    switch (coordinates) {
      case "1,0":
        return "rgb(195, 168, 235)";
      case "1,1":
        return "rgb(114, 168, 216)";
      case "0,1":
        return "rgb(195, 168, 235)";
      case "0,2":
        return "rgb(114, 168, 216)";
      case "0,3":
        return "rgb(195, 168, 235)";
      case "1,3":
        return "rgb(114, 168, 216)";
      default:
        return "white";
    }
  };

  const ActionCard = ({ description, type, direction }) => (
    <CardContainer style={{ background: handleColorSwitch() }}>
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
        {actions.length === 0 && <EndPage />}
        {actions.length > 0 &&
          actions.map((item) => <ActionCard key={item.direction} {...item} />)}
      </GameContainer>
    </>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import DirectionButtons from "components/DirectionButtons.js";
import styled from "styled-components";

const Header = styled.h2`
  font-size: 19px;
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  margin-bottom: 0;
`;

const Game = () => {
  const question = useSelector((state) => state.gameplay.question);

  return (
    <>
      <Header>{question.description}</Header>
      {question.actions?.map((item, index) => {
        return (
          <Description key={index}>
            You look to the {item.direction}. {item.description}
          </Description>
        );
      })}
      {question.actions && <DirectionButtons />}
    </>
  );
};

export default Game;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import gameplay from "reducers/gameplay";

import styled from "styled-components";

const Header = styled.h2`
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const Move = styled.p`
  margin: 0;
`;

const Button = styled.button`
  color: white;
  background-color: grey;
  font-size: 16px;
  font-family: inherit;
  margin: 10px auto;
  padding: 10px;
  border: none;
  border-radius: none;
  transition: ease-in 0.2s;
  cursor: pointer;

  @media (min-width: 768px) {
    &:hover {
      color: white;
      background-color: tomato;
    }
  }
`;

const Summary = () => {
  const finalDescription = useSelector((state) => state.gameplay.question.description);
  const moves = useSelector((state) => state.gameplay.moves);
  const dispatch = useDispatch();

  return (
    <>
      <Header>{finalDescription}</Header>
      <h3>Your path:</h3>
      {moves.map((move, index) => (
        <Move key={index}>{move}</Move>
      ))}
      <Button type="button" onClick={() => dispatch(gameplay.actions.restart())}>
        Restart
      </Button>
    </>
  );
};

export default Summary;

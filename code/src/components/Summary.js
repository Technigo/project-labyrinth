import React from "react";
import { useSelector, useDispatch } from "react-redux";
import gameplay from "reducers/gameplay";

import styled from "styled-components";

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
      <h2>{finalDescription}</h2>
      <h3>Your path:</h3>
      {moves.map((move, index) => (
        <span key={index}>{move}</span>
      ))}
      <Button type="button" onClick={() => dispatch(gameplay.actions.restart())}>
        Restart
      </Button>
    </>
  );
};

export default Summary;

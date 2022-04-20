import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import gameplay, { generateNextQuestion } from "reducers/gameplay";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Button = styled.button`
  justify-self: center;
  width: 85px;
  padding: 8px;
  margin: 3px;
  color: black;
  background-color: white;
  border: none;
  font-family: inherit;
  cursor: pointer;
  transition: 0.2s ease-in;

  @media (min-width: 768px) {
    &:enabled:hover {
      color: white;
      background-color: tomato;
    }
  }

  &:disabled {
    color: grey;
    opacity: 0.7;
  }
`;

const DirectionButtons = () => {
  const directions = useSelector((state) =>
    state.gameplay.question.actions?.map((item) => item.direction)
  );
  const dispatch = useDispatch();
  const direction = ["North", "West", "East", "South"];

  const handleOnClick = (direction) => {
    dispatch(generateNextQuestion(direction));
    dispatch(gameplay.actions.setMove(direction));
  };

  return (
    <>
      <p>Where do you want to go?</p>
      <Container>
        <Button
          type="button"
          value={direction[0]}
          onClick={(event) => handleOnClick(event.target.value)}
          disabled={!directions?.includes(direction[0])}
        >
          {direction[0]}
        </Button>
        <div>
          <Button
            type="button"
            value={direction[1]}
            onClick={(event) => handleOnClick(event.target.value)}
            disabled={!directions?.includes(direction[1])}
          >
            {direction[1]}
          </Button>{" "}
          <Button
            type="button"
            value={direction[2]}
            onClick={(event) => handleOnClick(event.target.value)}
            disabled={!directions?.includes(direction[2])}
          >
            {direction[2]}
          </Button>
        </div>
        <Button
          type="button"
          value={direction[3]}
          onClick={(event) => handleOnClick(event.target.value)}
          disabled={!directions?.includes(direction[3])}
        >
          {direction[3]}
        </Button>
      </Container>
    </>
  );
};

export default DirectionButtons;

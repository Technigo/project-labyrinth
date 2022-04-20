import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
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

  &:enabled:hover {
    color: white;
    background-color: tomato;
    cursor: pointer;
    transition: 0.2s ease-in;
  }

  &:disabled {
    color: grey;
    opacity: 0.7;
  }
`;

const DirectionButtons = ({ directions }) => {
  const dispatch = useDispatch();

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
          onClick={(event) => handleOnClick(event.target.value)}
          value={"North"}
          disabled={!directions?.includes("North")}
        >
          North
        </Button>
        <div>
          <Button
            type="button"
            onClick={(event) => handleOnClick(event.target.value)}
            value={"West"}
            disabled={!directions?.includes("West")}
          >
            West
          </Button>
          <Button
            type="button"
            onClick={(event) => handleOnClick(event.target.value)}
            value={"East"}
            disabled={!directions?.includes("East")}
          >
            East
          </Button>
        </div>
        <Button
          type="button"
          onClick={(event) => handleOnClick(event.target.value)}
          value={"South"}
          disabled={!directions?.includes("South")}
        >
          South
        </Button>
      </Container>
    </>
  );
};

export default DirectionButtons;

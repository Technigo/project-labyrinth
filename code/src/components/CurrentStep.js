import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "reducers/game";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Loader } from "./Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap; 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 6px;
`;

const StartOverButton = styled.button``;

export const CurrentStep = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.game.currentStep);
  let navigate = useNavigate();

  const onRestart = () => {
    navigate("/");
  };

  return (
    <Container>
      <Loader />
      
      <p>Coordinates: {currentStep?.coordinates}</p>
      <p>{currentStep?.description}</p>
      <>What's your next move?</>
      {currentStep?.actions?.map((action) => {
        return (
          <ButtonContainer key={action.direction}>
            <p>{action.description}</p>
            <Button onClick={() => dispatch(nextStep(action))}>
              Go {action.direction}
            </Button>
          </ButtonContainer>
        );
      })}
      <StartOverButton onClick={onRestart}>Start over</StartOverButton>
    </Container>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { fetchSteps } from "../reducers/steps";

const MainText = styled.p`
  font-size: 42px;
  margin: 0;
  color: black;
`;

const SecondaryText = styled.p`
  font-size: 32px;
  margin: 0;
  color: #6b6b6b;
`;

const SmallText = styled.p`
  margin: 0;
  font-size: 24px;
  color: #6b6b6b;
`;

const Content = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  font-family: inherit;
  font-size: 24px;
  letter-spacing: 1px;
  text-decoration: none;
  color: rgb(114, 84, 38);
  background: rgba(114, 84, 38, 0.3);
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 30px;
  border: 2px solid rgb(114, 84, 38);
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 rgb(114, 84, 38);

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 rgb(114, 84, 38);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ActionPage = () => {
  // get the latest step by getting the last item in the array steps from the store
  const currentStep = useSelector((store) => store.steps.currentStep);
  const lastDirection = useSelector(
    (store) => store?.steps?.steps?.at(-1)?.directionTaken
  );
  const allSteps = useSelector((store) => store.steps.steps);

  const dispatch = useDispatch();

  const handleClick = (direction) => {
    dispatch(fetchSteps(direction));
  };

  return (
    <Content>
      <SmallText>
        {allSteps.length === 1 &&
          `You have moved 1 step and the last direction chosen was ${lastDirection.toLowerCase()}`}
        {allSteps.length > 1 &&
          `You have moved ${
            allSteps.length
          } steps and the last direction chosen was ${lastDirection.toLowerCase()}`}
      </SmallText>
      <div>
        <MainText>{currentStep.description}</MainText>
      </div>
      <div>
        {currentStep.actions.map((action) => (
          <div key={action.description}>
            <SecondaryText>{action.description}</SecondaryText>
            <Button
              type="button"
              onClick={() => handleClick(action.direction)}
            >
              Go {action.direction.toLowerCase()}
            </Button>
          </div>
        ))}
      </div>
    </Content>
  );
};

export default ActionPage;

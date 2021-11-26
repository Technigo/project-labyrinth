import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { fetchSteps } from "../reducers/steps";

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

const SmallText = styled.p`
  margin: 0;
  font-size: 12px;
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
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #725ac1;
  background: rgba(46, 81, 218, 0.3);
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 30px;
  border: 2px solid #725ac1;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #725ac1;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725ac1;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ActionPage = () => {
  // get the latest step by getting the last item in the array steps from the store
  const currentStep = useSelector((store) => store.steps.currentStep);
  const lastDirection = useSelector((store) =>
    store.steps.directions.at(-1)
  );
  const allSteps = useSelector((store) => store.steps.steps);
  const username = useSelector((store) => store.steps.username);

  const dispatch = useDispatch();

  const handleClick = (direction) => {
    dispatch(fetchSteps(direction));
  };
  return (
    <Content>
      <SmallText>
        {allSteps.length > 1 &&
          `You have moved ${allSteps.length} step${
            allSteps.length > 1 && "s"
          }${
            allSteps.length > 1 &&
            `, and the latest movement was ${lastDirection}`
          }`}
      </SmallText>
      <div>
        <Title>{username}</Title>
        <SecondaryText>{currentStep.description}</SecondaryText>
      </div>
      <div>
        {currentStep.actions.map((action) => (
          <div key={action.description}>
            <div>{action.description}</div>
            <Button
              type="button"
              onClick={() => handleClick(action.direction)}
            >
              Go {action.direction}
            </Button>
          </div>
        ))}
      </div>
    </Content>
  );
};

export default ActionPage;

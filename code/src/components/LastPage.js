import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import steps from "../reducers/steps";

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
  const currentStep = useSelector((store) =>
    store.steps.steps.at(-1)
  );
  const stepsTaken = useSelector((store) => store.steps.steps);
  const username = useSelector((store) => store.steps.username);

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Handle click is activated");
    dispatch(steps.actions.setInitialState());
  };

  return (
    <Content>
      <SmallText>
        It took you {stepsTaken.length} steps to reach the end
      </SmallText>
      <div>
        <Title>{username}</Title>
        <SecondaryText>{currentStep?.description}</SecondaryText>
      </div>
      <div>
        <Button type="button" onClick={() => handleClick()}>
          Start over
        </Button>
      </div>
    </Content>
  );
};

export default ActionPage;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import steps from "../reducers/steps";

const Title = styled.h1`
  font-size: 42px;
  margin: 0;
  color: black;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SecondaryText = styled.p`
  font-size: 32px;
  margin: 0;
  color: #6b6b6b;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const SmallText = styled.p`
  margin: 0;
  font-size: 24px;
  color: #6b6b6b;

  @media (max-width: 768px) {
    font-size: 16px;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ActionPage = () => {
  const currentStep = useSelector((store) => store.steps.currentStep);
  const stepsTaken = useSelector((store) => store.steps.steps);
  const username = useSelector((store) => store.steps.username);

  const dispatch = useDispatch();

  const handleClick = () => {
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

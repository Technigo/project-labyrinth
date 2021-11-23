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

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ActionPage = ({ user, description, actionOne, actionTwo }) => {
  const currentStep = useSelector((store) =>
    store.steps.steps.at(-1)
  );
  const username = useSelector((store) => store.steps.username);

  const dispatch = useDispatch();
  return (
    <Content>
      <TitleBar>
        <Thumbnail />
        <div>
          <Title>{username}</Title>
          <SecondaryText>{currentStep.description}</SecondaryText>
        </div>
        <div>
          {currentStep.actions.map((action) => (
            <Button
              type="button"
              onClick={() => dispatch(fetchSteps(action.direction))}
            >
              {action.direction}
            </Button>
          ))}
        </div>
      </TitleBar>
    </Content>
  );
};

export default ActionPage;

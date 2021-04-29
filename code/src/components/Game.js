import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { nextStep } from "../reducers/games";

const LoadingContainer = styled.div`
  background-color: black;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  text-align: justify
`;

const ActionContainer = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-align: justify
`;

const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  width: auto;
  height: 100vh;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const DescriptionTitle = styled.text`
  font-size: 18px;
  font-weight: bold;
`

const Text = styled.text`
  font-size: 12px;
  background-color: black;
  color: white;
`;

const Button = styled.button`
  background-color: gold;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const Game = () => {
  const userName = useSelector((store) => store.games.username);
  const actions = useSelector((store) => store.games.description);
  const description = useSelector(
    (store) => store.games.description.description
  );

  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <LoadingContainer>
          <DescriptionTitle>{description}</DescriptionTitle>
        </LoadingContainer>
        {actions.actions.map((action) => (
          <ActionContainer key={action.description}>
            <Text>{action.description}</Text>
            <Button
              onClick={() => dispatch(nextStep(userName, action.direction))}
            >
              {action.direction}
            </Button>
          </ActionContainer>
        ))}
      </Wrapper>
    </>
  );
};

export default Game;

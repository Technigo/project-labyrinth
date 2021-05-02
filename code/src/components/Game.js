import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import background from "../assets/background1.jpg";

import Loading from "./Loading";
import { continueGame } from "../reducers/gameFetch";
import End from "./End";

const Game = () => {
  const loading = useSelector((store) => store.gameFetch.loading);
  const gameDescription = useSelector((store) => store.gameFetch.description);
  const coordinates = useSelector((store) => store.gameFetch.coordinates);
  const gameActions = useSelector((store) => store.gameFetch.actions);
  const userName = useSelector((store) => store.gameFetch.userName);

  const dispatch = useDispatch();

  const onMove = (direction) => {
    dispatch(continueGame(userName, direction));
  };

  return (
    <>
      {loading && <Loading />}
      {coordinates === "1,3" && <End gameDescription={gameDescription} />}
      {!loading && coordinates !== "1,3" && (
        <Container>
          <Flex>
            <ContentWrapper>
              <Description>{gameDescription}</Description>
              <ActionWrapper>
                {gameActions.map((choice, index) => (
                  <Action key={index}>
                    <Direction>{choice.description}</Direction>
                    <Button onClick={() => onMove(choice.direction)}>
                      {choice.direction}
                    </Button>
                  </Action>
                ))}
              </ActionWrapper>
            </ContentWrapper>
          </Flex>
        </Container>
      )}
    </>
  );
};

export default Game;

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  background-position: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  border: 1px dashed;
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;

  @media (min-width: 768px) {
    max-width: 500px;
    height: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
  }
`;

const Description = styled.p`
  font-size: 25px;
  margin-bottom: 0;
  font-family: "IM Fell English SC", serif;
`;

const Direction = styled.p`
  font-family: Raleway, sans-serif;
`;

const ActionWrapper = styled.div`
  display: flex;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: 0 10px;
  font-size: 16px;
`;

const Button = styled.button`
  margin: 10px auto;
  width: 130px;
  letter-spacing: 2px;
  border-radius: 8px;
  font-family: "Eagle Lake", cursive;
  color: #ffc000;
  font-size: 18px;
  font-weight: 400;
  text-shadow: 0 1px 3px #000;
  text-align: center;
  padding: 10px 0;
  background: radial-gradient(circle, #8b0000, #8b0000);
  border-top: 4px ridge #ffb000;
  border-left: 4px groove #ffb000;
  border-right: 4px ridge #ffb000;
  border-bottom: 4px groove #ffb000;
  box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
  :hover {
    background: radial-gradient(circle, #e52b2b, #8b0000);
    box-shadow: 0px 0 5px 5px rgba(255, 255, 255, 0.2);
  }
  :active {
    background: radial-gradient(circle, #ec6a6a, #e52b2b);
    box-shadow: 0px 0 5px 5px rgba(255, 255, 255, 0.2);
  }
`;

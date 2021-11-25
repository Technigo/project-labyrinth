import React from "react";
import { PageContainer } from "./StartPage";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchInstructions } from "reducers/game";
import { StartButton } from "./StartPage";
import footsteps from "../assets/footsteps-audio.mp3";
import walkingKnight from "../assets/walking-knight.gif";
import restingKnight from "../assets/resting-knight.gif";

const GameDescription = styled.h3`
  text-align: center;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const PathDescription = styled.p`
  text-align: center;
  margin: 0;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const ButtonPathContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const KnightImg = styled.img`
  width: 200px;
  place-self: center;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const GamePage = () => {
  const dispatch = useDispatch();
  const gameList = useSelector((store) => store.game.gameList);
  const coordinates = useSelector((store) => store.game.gameList.coordinates);

  let imgURL = "";
  if (coordinates === "1,3") {
    imgURL = restingKnight;
  } else {
    imgURL = walkingKnight;
  }

  let audio = new Audio(footsteps);
  const startFootsteps = () => {
    audio.play();
  };

  return (
    <PageContainer>
      <GameDescription>{gameList.description}</GameDescription>
      <KnightImg src={imgURL} alt="Knight" />
      {gameList.actions.map((item) => (
        <ButtonPathContainer>
          <PathDescription>{item.description}</PathDescription>
          <StartButton
            key={item.description}
            onClick={() => {
              startFootsteps();
              dispatch(fetchInstructions({ direction: item.direction }));
            }}
          >
            {item.direction}
          </StartButton>
        </ButtonPathContainer>
      ))}
    </PageContainer>
  );
};

export default GamePage;

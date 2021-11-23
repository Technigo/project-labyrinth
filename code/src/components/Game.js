import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { FetchNextMove } from "../reducers/game";
import History from "./History";

const GameContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 10px;
`;

const DescriptionHeader = styled.h1`
  font-size: 16px;
`;

const OptionHeader = styled.h2`
  font-size: 14px;
  font-weight: normal;
`;

const Game = () => {
  const story = useSelector((store) => store.game.moves);
  console.log(story);
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.username);

  const onNextMove = (direction) => {
    dispatch(FetchNextMove(direction, userName));
    console.log("test", direction);
  };

  return (
    <>
      {story?.actions?.length === 0 ? (
        <History />
      ) : (
        <GameContainer>
          <DescriptionHeader>{story.description}</DescriptionHeader>
          <OptionHeader>
            {story?.actions?.map((item) => (
              <div key={item.description}>
                <p>{item.description}</p>
                <button onClick={() => onNextMove(item.direction)}>
                  Go {item.direction}
                </button>
              </div>
            ))}
          </OptionHeader>
        </GameContainer>
      )}
    </>
  );
};

export default Game;

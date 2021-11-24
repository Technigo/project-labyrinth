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

const Image = styled.img`
  width: 200px;
  height: 200px;
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
              <>
                <div key={item.description}>
                  <p>{item.description}</p>
                  <button onClick={() => onNextMove(item.direction)}>
                    Go {item.direction}
                  </button>
                </div>
                <Image
                  src={
                    story?.coordinates === "0,0"
                      ? "http://www.fillmurray.com/460/300"
                      : story?.coordinates === "1,0"
                      ? "http://www.fillmurray.com/284/196"
                      : story?.coordinates === "1,1"
                      ? "https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"
                      : story?.coordinates === "0,1"
                      ? "https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?h=334.5&q=75&fit=crop&ar=14%3A11&fm=pjpg&auto=compress"
                      : story?.coordinates === "0,2"
                      ? "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
                      : story?.coordinates === "0,3"
                      ? "https://www.maxd.se/wp-content/uploads/sites/24/2020/05/d-vitamin-gjennom-solen.jpg"
                      : "https://www.familjetapeter.se/images/thumbs/0313463_Fiery%20Soccer%20Ball%20In%20Goal%20With%20Net%20In%20Flames.jpeg"
                  }
                />
              </>
            ))}
          </OptionHeader>
        </GameContainer>
      )}
    </>
  );
};

export default Game;

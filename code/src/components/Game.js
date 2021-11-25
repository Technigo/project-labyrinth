import Card from "lib/Card";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import History from "./History";

const GameContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin-top: -30px;
`;

const DescriptionHeader = styled.h1`
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.67);
  padding: 20px 40px;
  text-align: center;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Game = () => {
  const story = useSelector((store) => store.game.moves);
  console.log(story);

  const imageDictionary = {
    "0,0": "/assets/one.jpg",
    "1,0": "/assets/two.jpg",
    "1,1": "/assets/thre.jpg",
    "0,1": "http://www.fillmurray.com/460/300",
    "0,2": "http://www.fillmurray.com/460/300",
    "0,3": "http://www.fillmurray.com/460/300",
    "1,3": "http://www.fillmurray.com/460/300",
  };

  return (
    <>
      {story?.actions?.length === 0 ? (
        <History />
      ) : (
        <GameContainer
          style={{
            backgroundImage: `url(${
              story?.coordinates === "0,0"
                ? "/assets/one.jpg"
                : story?.coordinates === "1,0"
                ? "/assets/two.jpg"
                : story?.coordinates === "1,1"
                ? "/assets/thre.jpg"
                : story?.coordinates === "0,1"
                ? "/assets/four.jpg"
                : story?.coordinates === "0,2"
                ? "/assets/five.jpg"
                : story?.coordinates === "0,3"
                ? "/assets/six.jpg"
                : "https://www.familjetapeter.se/images/thumbs/0313463_Fiery%20Soccer%20Ball%20In%20Goal%20With%20Net%20In%20Flames.jpeg"
            })`,
          }}
        >
          <DescriptionHeader>{story.description}</DescriptionHeader>
          <OptionContainer>
            {story?.actions?.map((item) => (
              <Card
                key={item.description}
                title={item.description}
                direction={item.direction}
                mainImage={imageDictionary[story?.coordinates]}
              ></Card>
            ))}
          </OptionContainer>
        </GameContainer>
      )}
    </>
  );
};

export default Game;

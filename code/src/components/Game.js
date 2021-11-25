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
  height: 200vh;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

const DescriptionHeader = styled.h1`
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.67);
  margin: 20px 20px;
  text-align: center;
  padding: 10px;
  border-radius: 6px;

  @media (min-width: 768px) {
    margin: 75px auto;
    width: 400px;
  }
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
    "0,0": "/assets/north.jpg",
    "1,0": "/assets/two.jpg",
    "1,1": "/assets/thre.jpg",
    "0,1": "http://www.fillmurray.com/460/300",
    "0,2": "http://www.fillmurray.com/460/300",
    "0,3": "http://www.fillmurray.com/460/300",
    "1,3": "http://www.fillmurray.com/460/300",
  };

  // const setBgColor = () => {
  //   switch (direction) {
  //     case "North":
  //       Image = "/assets/north.jpg";
  //       break;
  //     case "West":
  //       Image = "/assets/thre.jpg";
  //       break;
  //     case "East":
  //       Image = "http://www.fillmurray.com/460/300";
  //       break;
  //     case "South":
  //       Image = "http://www.fillmurray.com/460/300";
  //       break;
  //   }
  //   return Image;
  // };

  return (
    <>
      {story?.actions?.length === 0 ? (
        <History />
      ) : (
        <GameContainer
          style={{
            backgroundImage: `url(${
              story?.coordinates === "0,0"
                ? "/assets/three.jpg"
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
                mainImage={
                  item.description.includes("sign")
                    ? "/assets/sign.jpg"
                    : item.description.includes("rickety")
                    ? "/assets/cavern.png"
                    : item.description.includes("archeway")
                    ? "/assets/arcway.jpg"
                    : item.description.includes("sturdier")
                    ? "/assets/bridgee.jpg"
                    : item.description.includes("rickety")
                    ? "/assets/stones.jpg"
                    : item.description.includes("pavers")
                    ? "/assets/stones.jpg"
                    : item.description.includes("sounds")
                    ? "/assets/door.jpg"
                    : item.description.includes("pathway")
                    ? "/assets/colorroad.jpg"
                    : item.description.includes("gizmos")
                    ? "/assets/gizmo.jpg"
                    : item.description.includes("chest")
                    ? "/assets/chest.jpg"
                    : item.description.includes("threshold")
                    ? "/assets/notes.jpg"
                    : "/assets/lightdoor.jpg"
                }
              >
                {console.log(item.description)}
              </Card>
            ))}
          </OptionContainer>
        </GameContainer>
      )}
    </>
  );
};

export default Game;

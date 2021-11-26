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

  @media (min-width: 992px) {
    height: 115vh;
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

  @media (min-width: 992px) {
    justify-content: center;
  }
`;

const Game = () => {
  const story = useSelector((store) => store.game.moves);

  const ChooseBg = () => {
    if (story?.coordinates === "0,0") {
      return "/assets/three.jpg";
    } else if (story?.coordinates === "1,0") {
      return "/assets/two.jpg";
    } else if (story?.coordinates === "1,1") {
      return "/assets/one.jpg";
    } else if (story?.coordinates === "0,1") {
      return "/assets/four.jpg";
    } else if (story?.coordinates === "0,2") {
      return "/assets/five.jpg";
    } else if (story?.coordinates === "0,3") {
      return "/assets/six.jpg";
    } else {
      return "/assets/two.jpg";
    }
  };

  return (
    <>
      {story?.actions?.length === 0 ? (
        <History />
      ) : (
        <GameContainer
          style={{
            backgroundImage: `url(${ChooseBg()}`,
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
                    ? "/assets/archway.jpg"
                    : item.description.includes("sturdier")
                    ? "/assets/bridge2.jpg"
                    : item.description.includes("pavers")
                    ? "/assets/stones.jpg"
                    : item.description.includes("sounds")
                    ? "/assets/door.jpg"
                    : item.description.includes("pathway")
                    ? "/assets/color_road.jpg"
                    : item.description.includes("gizmos")
                    ? "/assets/gizmo.jpg"
                    : item.description.includes("chest")
                    ? "/assets/chest.jpg"
                    : item.description.includes("threshold")
                    ? "/assets/notes.jpg"
                    : "/assets/light_door.jpg"
                }
              ></Card>
            ))}
          </OptionContainer>
        </GameContainer>
      )}
    </>
  );
};

export default Game;

// In Dreams by Scott Buckley | www.scottbuckley.com.au
// Music promoted by https://www.chosic.com/free-music/all/
// Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/

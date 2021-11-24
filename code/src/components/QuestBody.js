import React, { useEffect } from "react";
// import bg pics
// import { arch } from "../assets/arch-00.jpg";
// import { colorful } from "../assets/colorful1.1.jpg";
// import { end } from "../assets/endofgame.jpg";
// import { lights } from "../assets/lights1.0.jpg";
// import { mechanic } from "../assets/mechanic0.1.jpg";
// import { melody } from "../assets/melody0.2.jpg";
// import { paper } from "../assets/paper0.3.jpg";

import { useDispatch, useSelector } from "react-redux";
import { fetchInitialData, fetchNavigationData } from "../reducers/quest";
import { LoadingIndicator } from "./LoadingIndicator";
import { GameOver } from "./GameOver";
import { MoveHistory } from "./MoveHistory";
import { quest } from "reducers/quest";

export const QuestBody = () => {
  const questMoves = useSelector((store) => store.quest.items);
  const player = useSelector((store) => store.quest.player);
  const currentQuest = questMoves[questMoves.length - 1];
  // const currentCoordinates = currentQuest.coordinates;
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(quest.actions.setPlayersName(""));
    dispatch(quest.actions.setHistory([]));
  };

  // useEffect(() => {
  //   let bgImg;
  //   switch (currentCoordinates) {
  //     case "0,0":
  //       bgImg = arch;
  //       break;
  //     case "1,0":
  //       bgImg = lights;
  //       break;
  //     case "1,1":
  //       bgImg = colorful;
  //       break;
  //     case "0,1":
  //       bgImg = mechanic;
  //       break;
  //     case "0,2":
  //       bgImg = melody;
  //       break;
  //     case "0,3":
  //       bgImg = paper;
  //       break;
  //     case "1,3":
  //       bgImg = end;
  //       break;
  //     default:
  //       bgImg = arch;
  //   }
  //   return (document.body.style.backgroundImage = `url(${bgImg})`);
  // }, [currentCoordinates]);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  if (!currentQuest) {
    return <LoadingIndicator />;
  }

  if (currentQuest.actions.length === 0) {
    return <GameOver />;
  }

  return (
    <>
      <p>{player}'s quest.</p>
      <div>
        <p>{currentQuest.description}</p>

        {currentQuest.actions.map((action) => (
          <div key={action.direction}>
            <p>{action.description}</p>
            <button
              onClick={() => {
                dispatch(fetchNavigationData({ type: action.type, direction: action.direction }));
              }}
            >
              Go {action.direction}
            </button>
          </div>
        ))}
        <p>
          Current coordinates:
          <span className="highlight" aria-label="decoration">
            {" "}
            {currentQuest.coordinates}
          </span>
        </p>
        <div>
          {" "}
          <MoveHistory />
        </div>
        <button onClick={onButtonClick}>Play Again</button>
      </div>
    </>
  );
};

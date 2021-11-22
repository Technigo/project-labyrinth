import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { game } from "../reducers/game";
import { FetchNextMove } from "../reducers/game";

const Game = () => {
  const story = useSelector((store) => store.game.moves);
  console.log(story);
  const dispatch = useDispatch();

  const [direction, setDirection] = useState("");

  const onNextMove = (direction) => {
    dispatch(FetchNextMove(direction));
  };
  console.log("test", direction);

  return (
    <div>
      <p>{story.description}</p>
      <h2>
        {story?.actions?.map((item) => (
          <div key={item.description}>
            <p>{item.description}</p>
            <button onClick={() => onNextMove(setDirection(direction))}>
              {item.direction}
            </button>
          </div>
        ))}
      </h2>
    </div>
  );
};

export default Game;

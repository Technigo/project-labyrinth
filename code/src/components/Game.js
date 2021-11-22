import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchNextMove } from "../reducers/game";

const Game = () => {
  const story = useSelector((store) => store.game.moves);
  console.log(story);
  const dispatch = useDispatch();

  const onNextMove = (direction) => {
    dispatch(FetchNextMove(direction));
    console.log("test", direction);
  };

  return (
    <div>
      <p>{story.description}</p>
      <h2>
        {story?.actions?.map((item) => (
          <div key={item.description}>
            <p>{item.description}</p>
            <button onClick={() => onNextMove(item.direction)}>
              {item.direction}
            </button>
          </div>
        ))}
      </h2>
    </div>
  );
};

export default Game;

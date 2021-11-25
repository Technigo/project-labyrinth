import React from "react";
import { continueLabyrinth } from "reducers/Labyrinth";
import { useDispatch } from "react-redux";
import labyrinth from "reducers/Labyrinth";
import Lottie from "react-lottie";

import animationBtn from "../lotties/btn";

export const Direction = ({ description, direction, setDirection }) => {
  const dispatch = useDispatch();

  const defaultOptionsBtn = {
    loop: true,
    autoplay: true,
    animationData:animationBtn,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  const click = () => {
    dispatch(labyrinth.actions.setAction(direction));
    dispatch(continueLabyrinth());
  };







  return (
    <div className="DirictionContainer">
<p>{description}</p>
<div className="DirectionBtnContainer">

      <button
      className="DirectionBtn"
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        onClick={click}
      >
        {direction}
      </button>
      </div>
    </div>
  );
};

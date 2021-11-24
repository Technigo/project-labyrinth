import React from "react";
import { useDispatch } from "react-redux";
import labyrinth from "../reducers/Labyrinth";
import Lottie from "react-lottie";
import animationData from "../lotties/treasure-chest-animation";

export const EndPage = () => {
  const dispatch = useDispatch();

  const onStartOver = () => {
    dispatch(labyrinth.actions.setLocation(null));
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section>
      <h1>Arrr, you found the treasure!</h1>
      <Lottie options={defaultOptions} height={400} width={400} />
      <button onClick={onStartOver} type="button">
        Start over
      </button>
    </section>
  );
};

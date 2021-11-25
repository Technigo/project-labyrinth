import React from "react";
import { useDispatch } from "react-redux";
import labyrinth from "../reducers/Labyrinth";
import Lottie from "react-lottie";
import animationChest from "../lotties/treasure-chest-animation";
import animationBackground from "../lotties/Background";

export const EndPage = () => {
  const dispatch = useDispatch();

  const onStartOver = () => {
    dispatch(labyrinth.actions.setLocation(null));
  };

  const defaultOptionsChest = {
    loop: true,
    autoplay: true,
    animationData: animationChest,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsBackground = {
    loop: true,
    autoplay: true,
    animationData: animationBackground,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="endpage-section">
      <Lottie
        // className="animationBackground"
        options={defaultOptionsBackground}
        style={{
          position: "absolute",
        }}
      />
      <h1 className="endpage-text">Arrr, you found the treasure!</h1>
      <Lottie options={defaultOptionsChest} height={400} width={400} />
      <button onClick={onStartOver} type="button" className="endpage-button">
        Start over
      </button>
    </section>
  );
};

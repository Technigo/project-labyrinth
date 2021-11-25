import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/72324-compass-element-animation.json";

export const CardAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={100} width={100} />
    </>
  );
};

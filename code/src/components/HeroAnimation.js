import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/hero-animation.json";

export const HeroAnimation = () => {
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
      <Lottie options={defaultOptions} height={400} width={400} />
    </>
  );
};

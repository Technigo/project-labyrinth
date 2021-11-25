import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/sunset-circle";

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

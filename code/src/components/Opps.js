import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/error-handling.json";

export const Opps = () => {
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
      <div className="loader">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </>
  );
};

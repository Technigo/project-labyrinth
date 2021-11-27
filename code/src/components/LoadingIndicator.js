import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/loading-double";
import { useSelector } from "react-redux";

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.game.loading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loader">
      {loading && <Lottie options={defaultOptions} height={400} width={400} />}
    </div>
  );
};

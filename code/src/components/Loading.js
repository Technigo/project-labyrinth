import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/cube";
import { useSelector } from "react-redux";

export const Loading = () => {
  const loading = useSelector((store) => store.ui.loading);

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
      {loading && <Lottie options={defaultOptions} height={400} height={400} />}
    </>
  );
};

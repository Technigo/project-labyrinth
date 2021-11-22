import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/83832-loader-circle-violet"
import { useSelector } from "react-redux";

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.ui.isLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      {loading && <Lottie options={defaultOptions} height={400} width={400} />}
    </>
  );
};

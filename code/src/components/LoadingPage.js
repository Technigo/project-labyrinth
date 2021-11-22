import React from "react";
// import Lottie from "react-lottie";
// import animationData from "../lottie/lottieLoader";
import { useSelector } from "react-redux";

export const LoadingPage = () => {
  const load = useSelector((store) => store.labyrinth.load);

  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };

  return (
    <>
      {load} <p>¯\_(ツ)_/¯</p>
    </>
  );
};

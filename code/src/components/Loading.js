import React from "react";
import Lottie from "react-lottie";
import { useSelector } from "react-redux";

import { CenteredScreen } from "../lib/Styling";
import animationData from "../assets/loader.json";

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      {isLoading && (
        <CenteredScreen>
          <Lottie
            options={defaultOptions}
            height={250}
            width={250} />
        </CenteredScreen>
      )}
    </>
  )
};

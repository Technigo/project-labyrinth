import React from "react";
import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import styled from "styled-components/macro";

import animationData from "../assets/fireworks.json";
import { Centered } from '../lib/Styling';

const Overlay = styled(Centered)`
  position: absolute;
  z-index: 1;
  width: 90%;
  height: 70vh;
  top: 10vh;
`;

export const Fireworks = () => {
  const coordinates = useSelector((state) => state.game.currentStep.coordinates);
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
      {coordinates === "1,3" && (
        <Overlay>
          <Lottie options={defaultOptions} />
        </Overlay>
      )}
    </>
  );
};
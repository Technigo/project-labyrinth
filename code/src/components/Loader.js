import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../animations/footprints.json";

const LoaderContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <LoaderContainer>
      <Lottie options={defaultOptions} height={100} width={100} />
    </LoaderContainer>
  );
};

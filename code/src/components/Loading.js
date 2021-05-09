import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../lotties/loader";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <LoaderBackground>
      <Lottie options={defaultOptions} width={220} height={220} />
    </LoaderBackground>
  );
};

export default Loading;

const LoaderBackground = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background: black;
`;

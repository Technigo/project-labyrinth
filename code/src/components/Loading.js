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
      <Lottie options={defaultOptions} width={200} height={200} />
    </LoaderBackground>
  );
};

export default Loading;

const LoaderBackground = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

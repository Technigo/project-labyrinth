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
      <Lottie options={defaultOptions} height={400} width={400} />
    </LoaderBackground>
  );
};

export default Loading;

const LoaderBackground = styled.main`
  background-color: black;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

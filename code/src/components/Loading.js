import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/cube";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: red;
  width: 100%;
  height: 100vh;
`;

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
    <LoadingContainer>
      {loading && <Lottie options={defaultOptions} height={400} height={400} />}
    </LoadingContainer>
  );
};

import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/loading-double";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  margin: 10px;
`;

export const LoadingIndicator = () => {
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
      {loading && <Lottie options={defaultOptions} height={400} width={400} />}
    </LoadingContainer>
  );
};

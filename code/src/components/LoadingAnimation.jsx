import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/dots";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LoadingAnimation = () => {
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
      {loading && <Lottie options={defaultOptions} height={500} width={400} />}
    </LoadingContainer>
  );
};


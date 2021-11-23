import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/72324-compass-element-animation"
import { useSelector } from "react-redux";

import styled from 'styled-components';

/* Styling for loader */
const LoaderBackground = styled.main`
background: #5c874d;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const LoaderText = styled.p`
color: #ffffff;
font-size: 16px;
`;

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.ui.isLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

return (
  <> {
    loading && (
      <LoaderBackground>
        <LoaderText>Loading...</LoaderText>
        {loading && <Lottie options={defaultOptions} height={400} width={400} />}
      </LoaderBackground>
    )
  }
  </>
);
};
import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/72324-compass-element-animation"
import { useSelector } from "react-redux";

import { GameBackground } from './StyledComponents/GameBackground';


import styled from 'styled-components';


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
      <GameBackground backgroundImage={"../assets/img/loading-img.jpeg"}>
      <LoaderBackground>
        <LoaderText>Loading...</LoaderText>
        {loading && <Lottie options={defaultOptions} height={250} width={250} />}
      </LoaderBackground>
      </GameBackground>
    )
  }
  </>
);
};

/* Styling for loader */
const LoaderBackground = styled.main`
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

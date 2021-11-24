import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/lf30_editor_7adxmbhh"
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
      <GameBackground backgroundImage={"../assets/img/loading-image.jpg"}>
      <LoaderBackground>
        <LoaderText>Loading...</LoaderText>
        {loading && <Lottie options={defaultOptions} height={500} width={500} />}
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
opacity: 0.7;
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

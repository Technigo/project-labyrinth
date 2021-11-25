import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/lf30_editor_7adxmbhh"

import { GameBackground } from './StyledComponents/GameBackground';


import styled from 'styled-components';


export const LoadingIndicator = () => {

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
      <GameBackground backgroundImage={"../assets/img/loading-image.jpg"}>
      <LoaderBackground>
        <div>
        <LoaderText>Loading...</LoaderText>
        <Lottie options={defaultOptions} height={500} />
        </div>
      </LoaderBackground>
      </GameBackground>
    // )
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

& div {
max-width: 400px;
}
`;

const LoaderText = styled.p`
text-align: center;
color: #000;
font-size: 25px;
font-weight: bolder;
font-family: 'Philosopher', sans-serif;
`;

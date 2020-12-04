import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import Lottie from 'react-lottie';
import animationData from '../lotties/spinning-compass';


export const Loader = () => {
  const loader = useSelector((store) => store.gameState.loader);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <> {
      loader && (
        <LoaderBackground>
          <LoaderText>Finding your way...</LoaderText>
          <Lottie
            options={defaultOptions}
            height={250}
            width={250} />
        </LoaderBackground>
      )
    }
    </>
  );
};

/* Styling for loader */
const LoaderBackground = styled.main`
 background: #1B233D;
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
import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../Lottie/confetti.json';
import styled from 'styled-components';

export const ConfettiLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <DivMarginLeft>
      {<Lottie options={defaultOptions} height={482} width={1021} />}
    </DivMarginLeft>
  );
};

const DivMarginLeft = styled.div`
  margin-left: -276px;
`;

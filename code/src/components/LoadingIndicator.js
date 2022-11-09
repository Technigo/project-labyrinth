/* eslint-disable max-len */

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/labyrinth';
import { OuterWrapper, InnerWrapper } from '../utils/GlobalStyle';

export const LoadingIndicator = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />{' '}
        </div>
      </InnerWrapper>
    </OuterWrapper>
  );
};

// For some reason the div is not showing up on the page

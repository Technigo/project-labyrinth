/* eslint-disable linebreak-style */
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/loading';
import { useSelector } from 'react-redux';
import { OuterWrapper } from 'GlobalStyles';

export const Loading = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
    return (
      isLoading && (
      <OuterWrapper>
        <Lottie options={defaultOptions} height={400} width={400} />
      </OuterWrapper>
      )
    );
  };
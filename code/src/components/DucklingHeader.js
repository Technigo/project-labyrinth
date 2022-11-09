import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/sassy-duck';

export const DucklingHeader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Lottie options={defaultOptions} />
  )
}
import React from 'react';
import Lottie from 'lottie-react'
import Duck from '../lotties/sassy-duck';

export const DucklingHeader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Duck,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Lottie animationData={Duck} options={defaultOptions} />
  )
}
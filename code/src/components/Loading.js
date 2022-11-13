import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../lotties/loading.json';

export const Loading = ()=>{
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Lottie animationData={animationData} options={defaultOption} />
  )
}
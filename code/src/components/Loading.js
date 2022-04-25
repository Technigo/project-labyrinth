import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import animationData from '../lotties/98510-loader';

export const Loading = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    isLoading && (
      <div className="lottie-container">
        <Lottie options={defaultOptions} />
      </div>
    )
  );
};

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/loading-double';
import { useSelector } from 'react-redux';

const LoadingScreen = () => {
  const loading = useSelector((store) => store.loading);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      {loading && <Lottie options={defaultOptions} height={400} width={400} />}
    </>
  );
};

export default LoadingScreen;

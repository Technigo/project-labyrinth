import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../Lottie/bicycle.json';
import { useSelector } from 'react-redux';

export const LoadingLottie = () => {
  const loading = useSelector((store) => store.labyrinth.loading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      {loading && <Lottie options={defaultOptions} height={400} width={400} />}
    </div>
  );
};

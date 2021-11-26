import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/loading-double';
import { useSelector } from 'react-redux';

import './loadingScreen.css';

export const LoadingScreen = () => {
  const loading = useSelector((store) => store.game.loading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lottie-wrapper">
      <div className="lottie">
        {loading && (
          <Lottie options={defaultOptions} height={500} width={300} />
        )}
      </div>
    </div>
  );
};

import React from 'react';
import Lottie from "react-lottie";
import animationData from '../assets/31366-fun-rainbow.json';

export const Animation = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

    return (
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
      />
    );
};
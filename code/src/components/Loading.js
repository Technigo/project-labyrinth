import React from 'react'
import Lottie from 'lottie-react';
import loader from 'lotties/loader.json'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return <Lottie options={defaultOptions} />
}

export default Loading;

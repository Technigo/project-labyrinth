import React from 'react';
import Lottie from 'lottie-react';
import myAnimation from '../images/lottie2.json'

const Loading = () => {
  return (
    <Lottie
      animationData={myAnimation} // Replace animationData with your own Lottie animation data
      loop
      autoplay
      style={{ height: '300px', width: '300px' }} />
  );
};

export default Loading;

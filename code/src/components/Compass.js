import React from 'react';
import Lottie from 'react-lottie';
import compass from '../lotties/72324-compass-element-animation';

const Compass = () => {
  const compassOption = {
    loop: true,
    autoplay: true,
    animationData: compass,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <Lottie options={compassOption} height={100} width={100} />
    </>
  );
};

export default Compass;

/* import React from 'react';
import Lottie from 'react-lottie';
import mazeloader from 'animations/mazeloader'
import { useSelector } from 'react-redux';

export const LoadingInProcess = () => {
  const loadingInProcess = useSelector((state) => state.uiLoader.loadingInProcess)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    mazeloader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      {loadingInProcess && <Lottie options={defaultOptions} height={400} width={400} />}
    </div>
  )
}; */

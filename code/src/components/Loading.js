/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import loadingPacMan from '../lotties/124683-eating-pixels';

const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingPacMan,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      {isLoading && <>
        <Lottie options={defaultOptions} height={150} width={150} />
        <h1>loading</h1>
      </>}
    </div>
  )
}

export default Loading;
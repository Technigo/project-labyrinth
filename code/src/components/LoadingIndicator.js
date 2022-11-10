/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie';
import mazeloader from '../animations/mazeloader'

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mazeloader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      {isLoading && <><Lottie options={defaultOptions} height={400} width={400} /><h1>loading</h1></>}
    </div>
  )
}

export default LoadingIndicator

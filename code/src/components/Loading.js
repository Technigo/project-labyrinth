import React from 'react'
import Lottie from 'react-lottie'
import { useSelector } from 'react-redux';
import loader from 'lotties/loader'

const LoadingAnimation = () => {
  const loading = useSelector((store) => store.ui.isLoading)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div>
      {loading && (
        <div>
          <p>Loading  </p>
          <Lottie options={defaultOptions} />
        </div>
      )}
    </div>
  )
}

export default LoadingAnimation;

import React from 'react'

import { useSelector } from 'react-redux';

const LoadingAnimation = () => {
  const loading = useSelector((store) => store.ui.isLoading)

  return (
    <div>
      {loading && (
        <div>
          <lottie-player
            src="https://lottie.host/f8188afe-51f9-405c-9358-8453e9692f47/xmYE4JlRkJ.json"
            background="transparent"
            speed="1"
            loop
            autoplay />
        </div>
      )}
    </div>
  )
}

export default LoadingAnimation;

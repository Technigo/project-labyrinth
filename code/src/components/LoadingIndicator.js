import React from 'react'
import { useSelector } from 'react-redux'

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <div>
      {isLoading
      && <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_qp2hl23a.json"
        background="transparent"
        speed="1"
        style={{ width: '300px',
          height: '300px' }}
        loop
        autoplay />}
    </div>
  )
}

export default LoadingIndicator

import React from 'react'
import Lottie from 'react-lottie'

import animationData from '../lotties/loader'

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default Loader

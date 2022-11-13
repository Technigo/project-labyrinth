import React from 'react'
import Lottie from 'react-lottie';
// import * as animationData from './pinjump.json'
import loading from '../lotties/loading'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie
        animationData={loading}
        options={defaultOptions}
        height={900}
        width={900} />
    </div>
  )
}

export default Loading
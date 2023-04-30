import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../lotties/compass.json'

export const LoadingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderer: 'svg',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Lottie
        animationData={defaultOptions.animationData}
        loop={defaultOptions.loop}
        autoplay={defaultOptions.autoplay}
        renderer={defaultOptions.renderer}
        rendererSettings={defaultOptions.rendererSettings}
        style={{ width: '450px', height: '450px' }} />
    </div>
  )
}
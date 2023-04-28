import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loading = () => {
  return (
    <Player src="https://assets8.lottiefiles.com/packages/lf20_vfgaeen1.json" className="spinner" loop autoplay />
  )
}
import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/loading-double'
import { useSelector } from 'react-redux'
// import { getColors } from 'lottie-colorify';
import { flatten } from 'lottie-colorify';


export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    animationData: flatten('#000000', animationData),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  // animationData flatten replaces all colors with one color, #000000
  // console.log(getColors(animationData));

  return (
    <>
      {loading && <Lottie options={defaultOptions} height={400} width={400} />}
    </>
  )
}

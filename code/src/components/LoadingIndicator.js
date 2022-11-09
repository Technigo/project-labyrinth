/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react'
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie'
import animationData from './lotties/labyrinth';
import { OuterWrapper, InnerWrapper } from '../utils/GlobalStyle'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  const defaultOptions = { loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    } }

  return (
    <OuterWrapper>
      <InnerWrapper>
        {isLoading && <div>Loading!! <Lottie options={defaultOptions} height={400} width={400} /> </div>}
      </InnerWrapper>
    </OuterWrapper>
  )
}

// For some reason the div is not showing up on the page
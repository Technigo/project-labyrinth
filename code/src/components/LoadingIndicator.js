import React from 'react'
import { useSelector } from 'react-redux'

import Lottie from 'react-lottie'
import animationData from '../animations/31848-footprint.json'
import img from '../images/1347872.jpg'

import styled from 'styled-components'

const LoaderBackground = styled.div`
  background-image: url("${props => props.backgroundImage}");
  background-size: cover; 
`

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.game.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <>
      <LoaderBackground backgroundImage={img}>
        {loading && <Lottie options={defaultOptions} height={400} width={400} />}   
      </LoaderBackground>
    </>
  )
}

import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import GeoLoad from '../lotties/9911-geometric-abstract-loader.json'

export const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GeoLoad,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <LoadingWrap>
        <h1>Loading...</h1>
        <Lottie animationData={GeoLoad} options={defaultOptions} height={100} width={100} />
      </LoadingWrap>
    </div>
  )
}

const LoadingWrap = styled.div`
border: 2px solid red; 
height: 100px;
z-index: 2;
`
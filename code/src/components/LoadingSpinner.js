import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import Lottie from 'react-lottie'
import animationData from '../animations/loading-spinner.json'

const LoadingBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #111;
  background-image: radial-gradient(#333, #111);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Creepster;
`

const LoadingSpinner = () => {
  const loading = useSelector((store) => store.spinner.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      {loading && (
        <LoadingBackground>
          <Lottie options={defaultOptions} height={400} width={400} />
          <p>Loading...</p>
        </LoadingBackground>
      )}
    </>
  )
}

export default LoadingSpinner

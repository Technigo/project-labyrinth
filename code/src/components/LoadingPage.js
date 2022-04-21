import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import animationData from '../lotties/loader'

const LoaderContainer = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: lime;

`

const LoadingPage = () => {
  const isLoading = useSelector((state) => state.game.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      {isLoading &&
        <LoaderContainer>
          <h1>Loading...</h1>
          <Lottie options={defaultOptions} height={100} width={100} />
        </LoaderContainer>
      }
    </>
  )
}

export default LoadingPage



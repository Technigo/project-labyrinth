/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import Lottie from 'lottie-react'
import Bar from './lotties/RetroLoadingBar.json';

const Loading = () => {
  const isLoading = useSelector((store) => store.ui.Loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Bar,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading
    && <LoaderContainer>
      <Lottie
        animationData={Bar}
        options={defaultOptions}
        width={200}
        height={200} />
    </LoaderContainer>}
    </>
  )
}

export default Loading

// -------Syled Components --------

const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    z-index: 1500;  
    `;
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable object-shorthand */
import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import animationData from '../Lottie/lottiestars'

export const LoadingPage = () => {
  const isLoading = useSelector((store) => store.loading.isLoading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <>
      {isLoading && (
        <LoadingWrapper>
          <div>
            <Lottie options={defaultOptions} />
          </div>
        </LoadingWrapper>
      )}
    </>
  )
}

const LoadingWrapper = styled.section`


`
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import Lottie from 'react-lottie';
import loadingPacMan from '../lotties/124683-eating-pixels';

const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingPacMan,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <WhileLoading>
        {isLoading && <>
          <Lottie options={defaultOptions} height={150} width={150} />
          <LoadingText>LOADING</LoadingText>
        </>}
      </WhileLoading>
    </div>
  )
}

export default Loading;

const WhileLoading = styled.div`
  //border: double gray;//
  border-radius: 5px;
  width: 90%;
  max-width: 900px;
  min-height: 20px;
  margin: 0 auto;
  padding: 5% 5%;
`
const LoadingText = styled.h1`
 font-size: 2.5rem;
 color: red;
 text-align: center;
`
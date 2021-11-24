import React from 'react'
import styled from 'styled-components/macro'
import { keyframes } from 'styled-components'
import Lottie from 'react-lottie'
import animationData from '../animations/loading-spinner.json'

const SlideIn = keyframes`
0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0px);
  }
`

const CreepyContainer = styled.div`
  animation-name: ${SlideIn};
  animation-duration: 13s;

  top: 0;

  p {
    margin: 0;
  }
`

const SpeechBubble = styled.div`
  width: 90px;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: -50px;
  background-color: #fff;
  align-items: center;
  text-align: center;
  font-weight: 900;
  position: relative;
  &.svans:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-bottom: 10px solid transparent;
    right: 50%;
    bottom: -23px;
  }
  &.svans:after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #fff;
    border-bottom: 10px solid transparent;
    right: 50%;
    bottom: -18px;
  }
  & p {
    font-family: Creepster;
    color: #000;
  }
`

const CreepyGirl = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <CreepyContainer>
      <SpeechBubble className='svans'>
        <p>For now...</p>
      </SpeechBubble>
      <Lottie options={defaultOptions} height={250} width={250} />
    </CreepyContainer>
  )
}

export default CreepyGirl

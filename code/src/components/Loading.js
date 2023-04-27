import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    position: absolute;
    z-index: 1;` // This is needed for the Loading component to be placed on top of the Labyrinth-component.

const Spinner = styled.span`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  background-image:
    radial-gradient(circle 8px , #363636 100%, transparent 0),
    radial-gradient(circle 8px , #363636 100%, transparent 0),
    radial-gradient(circle 8px , #363636 100%, transparent 0),
    radial-gradient(circle 8px , #363636 100%, transparent 0),
    radial-gradient(circle 8px , #363636 100%, transparent 0),
    radial-gradient(circle 8px , #363636 100%, transparent 0);
    background-repeat: no-repeat;
  animation: move 4s linear infinite , rotate 2s linear infinite;

@keyframes rotate {
  0% , 20%{ transform: rotate(0deg)}
  30% , 40% { transform: rotate(90deg)}
  50% , 60% { transform: rotate(180deg)}
  70% , 80% { transform: rotate(270deg)}
  90%,  100% { transform: rotate(360deg)}
}
@keyframes move {
  0% ,  9%{
      background-position:
      -24px -30px,  -24px 0px, -24px 30px,
      24px -30px,  24px 0px,  24px 30px;
  }
  10% , 25%{
      background-position:
      0px -30px,  -24px 0px, -24px 30px,
      68px -30px,  24px 0px,  24px 30px;
  }
  30% , 45%{
      background-position:
      0px -68px, -24px -20px, -24px 24px,
      68px -30px, 24px -20px, 24px 24px;
  }
  50% , 65% {
      background-position:
      0px -68px, -24px -68px, -24px 24px,
      68px -24px, 0px -20px, 24px 24px;
  }
  70% , 85% {
      background-position:
      0px -68px, -24px -68px, 0px 24px,
      68px -24px, 0px -20px, 68px 24px;
  }
  90% , 100% {
      background-position:
      0px -68px, -24px -68px, 0px 0px,
      68px -24px, 0px 0px, 68px 24px;
  }
}`

export const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  )
}
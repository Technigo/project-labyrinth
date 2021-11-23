import React from 'react';
// import Lottie from 'react-lottie';
// import animationData from './lotties/cube';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const loaderAnim = keyframes`
	from {transform: scale(0, 0);}
    to {transform: scale(1, 1);}
`;

const Loader = styled.div`
  display: inline-block;
  font-size: 0px;
  padding: 0px;

  span {
    vertical-align: middle;
    border-radius: 100%;

    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 3px 2px;
    -webkit-animation: loader1 0.8s linear infinite alternate;
    animation: ${loaderAnim} 0.8s linear infinite alternate;
  }
  span:nth-child(1) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    background: rgba(245, 103, 115, 0.6);
  }
  span:nth-child(2) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
    background: rgba(245, 103, 115, 0.8);
  }
  span:nth-child(3) {
    -webkit-animation-delay: -0.26666s;
    animation-delay: -0.26666s;
    background: rgba(245, 103, 115, 1);
  }
  span:nth-child(4) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
    background: rgba(245, 103, 115, 0.8);
  }
  span:nth-child(5) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    background: rgba(245, 103, 115, 0.4);
  }

  ${
    '' /* @keyframes loader1 {
    from {transform: scale(0, 0);}
    to {transform: scale(1, 1);}
 }
 @-webkit-keyframes loader1 {
    from {-webkit-transform: scale(0, 0);}
    to {-webkit-transform: scale(1, 1);}
 } */
  }
`;

const LoadingStuff = () => {
  const loading = useSelector((store) => store.ui.loading);
  console.log(loading);

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  return (
    <>
      {loading && (
        <Loader>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Loader>
      )}
    </>
  );
};

export default LoadingStuff;

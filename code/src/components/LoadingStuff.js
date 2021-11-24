import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '@react-hook/window-size';

const loaderAnim = keyframes`
	from {transform: scale(0, 0)};
    to {transform: scale(1, 1)};
`;

const Loader = styled.div`
  display: inline-block;
  font-size: 0px;
  padding: 0px;
  z-index: 5;
  position: absolute;
  top: 50%;
  left: ${(props) => props.wid / 4}px;

  span {
    vertical-align: middle;
    border-radius: 100%;
    display: inline-block;
    height: ${(props) => props.hgt * 0.05}px;
    width: ${(props) => props.wid * 0.1}px;
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

const LoaderBox = styled.div`
  height: ${(props) => props.hgt}px;
  width: ${(props) => props.wid}px;
  background-color: black;
  position: absolute;
  top: 0;
  z-index: 5;
`;

const LoadingStuff = () => {
  const [width, height] = useWindowSize();
  const loading = useSelector((store) => store.ui.loading);
  console.log(loading);
  console.log(width);

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
        <LoaderBox hgt={height} wid={width}>
          <Loader hgt={height} wid={width}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Loader>
        </LoaderBox>
      )}
    </>
  );
};

export default LoadingStuff;

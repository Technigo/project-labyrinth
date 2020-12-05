import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import animationData from '../lib/lotties/40235-si-fi-circle.json';
import { LoaderContainer } from '../lib/LoaderStyle';


export const Loader = () => {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <LoaderContainer>
      <Lottie 
	      options={defaultOptions}
        height={400}
        width={400}
      />
    </LoaderContainer>
  );
};
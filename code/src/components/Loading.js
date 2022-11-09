/* eslint-disable linebreak-style */
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/loading';
import { useSelector } from 'react-redux';

export const Loading = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
    return (
      isLoading && (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      )
    );
  };
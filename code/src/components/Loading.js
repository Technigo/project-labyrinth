import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import mazeloader from './animations/mazeloader'

export const LoadingInProcess = () => {
    //not completed


  const defaultOptions = {
    loop: true,
    autoplay: true,
    mazeloader,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
    {loading &&   
        <Text>Loading...</Text>
        <Lottie options={defaultOptions} height={400} width={400} />
    }
    </>
  )
};

const Text = styled.h3`
`
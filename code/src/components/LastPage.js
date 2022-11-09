/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import animationData from '../lotties/castle';

const LastPage = () => {
  const username = useSelector((store) => store.ui.username);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
        <div>{username}</div>
        <button onClick={() => window.location.reload()}>Play Again!</button>
      </div>
    </div>
  );
};

export default LastPage;
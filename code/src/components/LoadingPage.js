// FROM CODE SANDBOX:

/* import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import animationData from './Lotties/loading';

const LoadingPage = () => {
  const loading = useSelector((store) => store.ui.loading)

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
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
export default LoadingPage; */

// COPIED FROM OTHER PROJECT
/* import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import animationData from '../lotties/loading';

const LoadingPage = () => {
 const loading = useSelector((store) => store.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
  {loading &&
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LoadingPage; */

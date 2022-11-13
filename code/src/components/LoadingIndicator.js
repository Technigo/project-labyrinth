import React from 'react';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';
import Compass from '../animations/loading-compass';

import './loadingindicator.css';

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Compass,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="lottie-container">
      <div className="lottie">
        {loading && (
          <Lottie animationData={Compass} options={defaultOptions} height={500} width={500} />
        )}
      </div>
    </div>
  )
}
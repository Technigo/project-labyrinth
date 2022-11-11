import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.game.isLoading);

  const [loadingDot, setLoadingDot] = useState('');
  const loadingAnimation = () => {
    if (loadingDot === '....') {
      setLoadingDot('');
    } else {
      setTimeout(() => setLoadingDot(`${loadingDot}.`), 250);
    }
  };
  return (
    <>
      {isLoading && (
        <h6>
          Loading{loadingAnimation()}
          {loadingDot}
        </h6>
      )}
    </>
  );
};

export default LoadingIndicator;

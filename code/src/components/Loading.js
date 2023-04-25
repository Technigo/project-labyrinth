/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const Loading = () => {
  const isLoading = useSelector((state) => state.labyrinth.isLoading);

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
        <h4>
                Loading{loadingAnimation()}
          {loadingDot}
        </h4>
      )}
    </>
  );
};
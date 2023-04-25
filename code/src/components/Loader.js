import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

export const Loader = () => {
  const [loadingDot, setLoadingDot] = useState('');
  const isLoading = useSelector((store) => store.loading.isLoading);

  // Creates a movement in the dots after loading
  const loadingAnimation = () => {
    if (loadingDot === '....') {
      setLoadingDot('');
    } else {
      setTimeout(() => setLoadingDot(`${loadingDot}.`), 350);
    }
  };

  return (
    <div>
      {isLoading && <LoadingText>loading{loadingAnimation()}
        {loadingDot}</LoadingText>}
    </div>
  )
}

const LoadingText = styled.h1`
   font-size: 2.5rem;
   color: red;
   text-align: center;
  `
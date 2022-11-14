import React from 'react';
import styled from 'styled-components';
import compass from '../assets/images/compass2.svg';
import { LocationWrapper } from './reusableStyles';

const Loading = () => {
  return (
    <LocationWrapper>
      <LoadingImage src={compass} />
      <h2>Loading</h2>
    </LocationWrapper>
  );
}

export default Loading;

const LoadingImage = styled.img`
width: 100px;
  height: 100px;
  animation-name: spin;
  animation-duration: 3500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
  filter: invert(100%);

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`
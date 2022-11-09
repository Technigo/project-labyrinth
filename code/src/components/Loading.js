/* import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../lotties/loading-boxes';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <StyledDiv>
      <StyledHeading>We will get there shortly...</StyledHeading>
      <Lottie options={defaultOptions} height={400} width={400} />
    </StyledDiv>
  );
}

export default Loading

const StyledDiv = styled.div`
  box-sizing: border-box;
  margin: auto;
  width: 100%;
  padding: 6em;
  text-align: center;
`;

const StyledHeading = styled.h1`
  color: tomato;
  line-height: 2em;
`;

npm i lottie-react
*/
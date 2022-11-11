import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { ChildContainer } from '../styles/GlobalStyles'

const Loading = () => {
  const isLoading = useSelector((store) => store.labyrinth.isLoading)
  return (
    <ChildContainer>
      <StyledHeading>We will get there shortly...</StyledHeading>
      {isLoading
      && <lottie-player
        src="https://assets5.lottiefiles.com/private_files/lf30_esg1l8r1.json"
        background="transparent"
        speed="1"
        style={{ width: '400px',
          height: '400px' }}
        loop
        autoplay />}
    </ChildContainer>
  )
}
export default Loading;

// const StyledDiv = styled.div`
//   box-sizing: border-box;
//   margin: auto;
//   width: 100%;
//   padding: 6em;
//   text-align: center;
// `;

const StyledHeading = styled.h1`
  color: #3fceea;
  line-height: 2em;
`;

/*
import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components/macro'

import loader from '../lotties/loading-boxes.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
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
 */

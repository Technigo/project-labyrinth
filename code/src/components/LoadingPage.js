import React from 'react';
import styled from 'styled-components';
import { Container } from 'StyledComponents/GlobalStyles';

export const LoadingPage = () => {
  return (
    <Container>
      <LoadingText>Loading...</LoadingText>
      <Loader/>
    </Container>
  );
};

const LoadingText = styled.p`
  font-size:30px;
  font-family:monospace,sans-serif;
`;

const Loader = styled.div`
  border-radius: 50%;
  border-top: 14px solid rgb(228, 35, 93);
  border-bottom: 14px solid rgb(228, 35, 93);
  width: 100px;
  height: 150px;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
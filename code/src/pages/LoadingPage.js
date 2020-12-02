import React from 'react';
import styled from 'styled-components';

const LoadingText = styled.h1`
  text-align: center;
  margin-top: 350px;
`;

export const LoadingPage = () => {
  return (
      <LoadingText>LOADING...!!</LoadingText>
  );
};

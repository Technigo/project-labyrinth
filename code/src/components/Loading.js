import React from 'react';
import styled from 'styled-components';

const LoadingText = styled.h1`
  font-family: "Press Start 2P";
  font-size: 20px;
`

export const Loading = () => {
  return (
    <LoadingText>LOADING...</LoadingText>
  )
}
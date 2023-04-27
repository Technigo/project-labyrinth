import React from 'react';
import styled from 'styled-components';

const LoadingText = styled.h1`
  color: green;
  font-family: "Press Start 2P";
  font-size: 20px;
  text-align: center;
`

export const Loading = () => {
  return (
    <LoadingText>LOADING...</LoadingText>
  )
}
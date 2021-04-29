import React from 'react';

import styled, { keyframes } from 'styled-components';

const card = keyframes`
from {opacity: 0; transform: scale(0.1)}
  to {opacity: 1; transform: scale(1)};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
`;

export const SmallBox = styled.div`
  width: 20%;
  height: 10%;
  :nth-of-type(1n) {
      animation: ${card} 1.2s ease-out;
  };
  :nth-of-type(2n) {
    animation: ${card} 1.4s ease-out;
};
:nth-of-type(3n) {
    animation: ${card} 1.6s ease-out;
};
:nth-of-type(4n) {
    animation: ${card} 1.8s ease-out;
};
`;

export const BorderRight = styled(SmallBox)`
  border-right: 2px solid #1c1a1a;
`;

export const BorderTop = styled(SmallBox)`
  border-top: 2px solid #1c1a1a;
`;
export const BorderLeft = styled(SmallBox)`
  border-left: 2px solid #1c1a1a;
`;
export const BorderBottom = styled(SmallBox)`
  border-bottom: 2px solid #1c1a1a;
`;

export const Labyrinth = () => {
  return (
    <Container>
      <BorderRight></BorderRight>
      <BorderBottom></BorderBottom>
      <BorderBottom></BorderBottom>
      <SmallBox></SmallBox>
      <BorderBottom></BorderBottom>

      <BorderRight></BorderRight>
      <BorderBottom></BorderBottom>
      <BorderRight></BorderRight>
      <BorderBottom></BorderBottom>
      <SmallBox></SmallBox>

      <BorderBottom></BorderBottom>
      <BorderRight></BorderRight>
      <SmallBox></SmallBox>
      <BorderBottom></BorderBottom>
      <SmallBox></SmallBox>

      <BorderRight></BorderRight>
      <BorderRight></BorderRight>
      <SmallBox></SmallBox>
      <BorderLeft></BorderLeft>
      <BorderBottom></BorderBottom>

      <BorderBottom></BorderBottom>
      <SmallBox></SmallBox>
      <SmallBox></SmallBox>
      <BorderLeft></BorderLeft>
      <BorderLeft></BorderLeft>

      <BorderRight></BorderRight>
      <BorderRight></BorderRight>
      <BorderBottom></BorderBottom>
      <BorderBottom></BorderBottom>
      <SmallBox></SmallBox>

      <BorderRight></BorderRight>
      <BorderBottom></BorderBottom>
      <BorderRight></BorderRight>
      <BorderRight></BorderRight>
      <SmallBox></SmallBox>

      <BorderBottom></BorderBottom>
      <BorderBottom></BorderBottom>
      <BorderRight></BorderRight>
      <BorderRight></BorderRight>
      <BorderBottom></BorderBottom>

      <SmallBox></SmallBox>
      <BorderRight></BorderRight>
      <SmallBox></SmallBox>
      <BorderBottom></BorderBottom>
      <SmallBox></SmallBox>

      <BorderRight></BorderRight>
      <SmallBox></SmallBox>
      <SmallBox></SmallBox>
      <BorderRight></BorderRight>
      <SmallBox></SmallBox>
    </Container>
  )
}
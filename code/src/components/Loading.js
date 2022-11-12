import React from 'react';
import { Styled } from './Loading.styled';

const Loading = () => {
  return (
    <Styled.Container>
      <Styled.LoadingGif src="assets/running.webp" alt="running gif" />
    </Styled.Container>
  )
};

export default Loading;
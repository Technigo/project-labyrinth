import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro';
import giphy from './giphy.gif'

export const Loading = () => {
  const isLoading = useSelector((store) => store.labyrinth.loading)
  return (
    <Background>
      {isLoading && <Paragraph>PAGE LOADING</Paragraph>}
    </Background>
  )
};

const Background = styled.div`
  background-image: url(${giphy});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

@media (min-width: 668px) and (max-width: 1024px) {
  background-size: cover;
}
@media (min-width: 1025px) {
  background-size: cover;
}
`;

const Paragraph = styled.div`
  font-family: 'Fondamento', cursive;
  font-size: 50px;
  background-color: rgba(247, 204, 172, 0.7);
`;


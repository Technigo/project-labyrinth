import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Loading } from './Loading';
import { Question } from './Question';

const MainContainer = styled.section`
  background-color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = () => {
  const loading = useSelector((store) => store.ui.isLoading);

  return (
    <MainContainer>
      {loading && <Loading />} 
      {!loading && <Question />}
    </MainContainer>
    )
  }
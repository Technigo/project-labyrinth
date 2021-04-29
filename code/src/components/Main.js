import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Loading } from './Loading';
import { Question } from './Question';

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const Main = () => {
  const loading = useSelector((store) => store.ui.isLoading);

  return (
    <MainContainer>
      {loading && <Loading />} 
      {!loading && <Question />}
    </MainContainer>
  )
};
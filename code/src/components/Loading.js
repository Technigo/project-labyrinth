import React from 'react';
import { useSelector } from 'react-redux';
import { Circular } from 'styled-loaders-react';
import styled from 'styled-components';

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return isLoading === true && <LoadingWrapper><Circular color="#000" size="80px" /></LoadingWrapper>;
};


const LoadingWrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
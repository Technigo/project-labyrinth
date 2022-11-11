/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return isLoading && <LoadingWrap> Loading..</LoadingWrap>
}

// STYLING FOR ABOVE COMPONENT
const LoadingWrap = styled.div`
  min-height: 100vh;
`
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import loading from '../LoadingImage/Spinner.gif'

export const LoadingPage = () => {
  const isLoading = useSelector((store) => store.loading.isLoading)

  return (
    <>
      {isLoading && (
        <LoadingWrapper>
          <div>
            <LoadingImage src={loading} alt="" />
          </div>
        </LoadingWrapper>
      )}
    </>
  )
}

const LoadingWrapper = styled.section`
  text-align: center;

`
const LoadingImage = styled.img`
  width: 50%;

@media (min-width: 668px) {
    width: 40%;
  }
`
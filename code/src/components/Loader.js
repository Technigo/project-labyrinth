import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const Loader = () => {
  const isLoading = useSelector((state) => state.labyrinth.isLoading)
  console.log(isLoading);

  return (
    <div>
      {isLoading && (
        <LoadingWrapper>
          <div>
            <LoadingImage src="./loadingImg.gif" alt="loading imge" />
          </div>
        </LoadingWrapper>
      )}
    </div>
  )
}

const LoadingWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 50%;
`
const LoadingImage = styled.img`
   width: 100%;
   height: 100%;
`

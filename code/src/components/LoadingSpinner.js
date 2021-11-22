import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(173, 96, 96, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .loader-spinner {
    display: inline;
    height: 50px;
    width: 50px;
    border: 5px solid rgb(205, 59, 59);
    border-radius: 50%;
    border-left: 5px solid rgb(239, 224, 179, 0.81);
    animation: spinner infinite 1s linear;
  }
`;

const LoadingSpinner = () => {
  const loading = useSelector((store) => store.game.loading);

  return (
    <>
      {loading && (
        <StyledLoader className='loader-overlay'>
          <div className='loader-spinner' />
        </StyledLoader>
      )}
    </>
  );
};

export default LoadingSpinner;

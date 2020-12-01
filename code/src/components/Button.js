import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 3px 5px;
`;

// ----------------------------------------------------------------

export const Button = ({ action, text }) => {
  const dispatch = useDispatch();

  return (
    <MainButton type="button" onClick={(event) => dispatch(action(event))}>
      {text}
    </MainButton>
  );
};

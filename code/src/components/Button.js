import React from 'react';
import { useDispatch } from 'react-redux';

// Components
import { MainButton } from '../styling/GlobalStyles';

// ----------------------------------------------------------------

export const Button = ({ action, text }) => {
  const dispatch = useDispatch();

  return (
    <MainButton type="button" onClick={(event) => dispatch(action(event))}>
      {text}
    </MainButton>
  );
};

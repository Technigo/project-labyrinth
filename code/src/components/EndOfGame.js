import React from 'react';
import styled from 'styled-components';
import { BtnNavigate } from './GameScreen';

const TheEnd = () => {
  const restart = () => {
    window.location.reload();
  };
  return (
    <>
      <BtnNavigate onClick={restart}>Restart Game!</BtnNavigate>
    </>
  );
};

export default TheEnd;

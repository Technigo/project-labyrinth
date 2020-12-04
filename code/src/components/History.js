import React from 'react';
import styled from 'styled-components/macro';

import { MainButton } from '../styling/GlobalStyles';

export const History = ({ history, setHistoryVisible }) => {
  const actualHistory = localStorage.getItem('history')
    ? JSON.parse(localStorage.getItem('history'))
    : history;
  return (
    <HistoryWrapper>
      <HistoryText>Your previous moves:</HistoryText>
      {actualHistory.map((step, index) => (
        <HistoryText key={index}>{step.direction}</HistoryText>
      ))}
      <MainButtonBlack onClick={() => setHistoryVisible(false)}>
        Close
      </MainButtonBlack>
    </HistoryWrapper>
  );
};

const HistoryWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  background: #fff;
`;

const HistoryText = styled.p`
  color: #000 !important;
`;

const MainButtonBlack = styled(MainButton)`
  border: 2px solid #000;
  color: #000;
`;

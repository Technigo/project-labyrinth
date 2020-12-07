import React from 'react';
import styled from 'styled-components/macro';

import { MainButton } from '../styling/GlobalStyles';

export const History = ({ history, setHistoryVisible }) => {
  const actualHistory = localStorage.getItem('history')
    ? JSON.parse(localStorage.getItem('history'))
    : history;

  const amountOfSteps = actualHistory.length;
  console.log(amountOfSteps);
  console.log(actualHistory);

  return (
    <HistoryWrapper>
      {actualHistory.length > 0 ? (
        <HistoryStepsTextBox>
          {actualHistory &&
            actualHistory.map((step, index) => {
              return (
                <HistoryStepsText key={index} amountOfSteps={amountOfSteps}>
                  {step}
                </HistoryStepsText>
              );
            })}
        </HistoryStepsTextBox>
      ) : (
        <HistoryText>You haven't taken any steps </HistoryText>
      )}
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

const HistoryStepsTextBox = styled.p`
  max-width: 80%;
`;

const HistoryText = styled.span`
  font-family: 'Helvetica';
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  color: #000;
`;

const HistoryStepsText = styled(HistoryText)`
  &:first-child:before {
    content: 'Your last step was to the ';
  }

  &:not(:first-child):before {
    ${(props) =>
      props.amountOfSteps > 1 ? 'content : "before that you went to the "' : ''}
  }
  &:last-child:before {
    ${(props) =>
      props.amountOfSteps > 4
        ? 'content : "and first of all, you walked to the "'
        : ''}
  }

  &:not(:last-child):after {
    content: ', ';
  }
  &:last-child:after {
    content: '.';
  }
`;

const MainButtonBlack = styled(MainButton)`
  border: 2px solid #000;
  color: #000;

  &:hover {
    opacity: 0.5;
  }
`;

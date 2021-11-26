import React from 'react';
import styled from 'styled-components';

export const DirectionButtons = () => {
  return (
    <Compas>
      <North role="img" aria-label={`-arrow`}>
        1 ➤
      </North>

      <East role="img" aria-label={`-arrow`}>
        2 ➤
      </East>

      <South role="img" aria-label={`-arrow`}>
        3 ➤
      </South>

      <West role="img" aria-label={`-arrow`}>
        4 ➤
      </West>
    </Compas>
  );
};

const Compas = styled.div`
  border: 2px solid lime;
`;

const North = styled.span`
  display: inline-block;
  font-size: 30px;
  color: #red;
  transform: rotate(-90deg);
  margin-bottom: 10px;
`;

const East = styled.span`
  display: inline-block;
  font-size: 30px;
  color: #red;
  transform: rotate(0deg);
`;

const South = styled.span`
  display: inline-block;
  font-size: 30px;
  color: #red;
  transform: rotate(90deg);
  margin-top: 10px;
`;

const West = styled.span`
  display: inline-block;
  font-size: 30px;
  color: #red;
  transform: rotate(180deg);
`;

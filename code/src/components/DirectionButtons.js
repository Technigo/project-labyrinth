import React from 'react';
import styled from 'styled-components';

export const DirectionButtons = ({ direction }) => {
  return (
    <Arrow role="img" aria-label="east-arrow" direction="West">
      ➤
    </Arrow>
  );
};

const Arrow = styled.span`
  margin: 30px;
  display: inline-block;
  font-size: 60px;
  transform: ${(props) =>
    props.direction === 'North'
      ? `rotate(-90deg)`
      : props.direction === 'East'
      ? `rotate(0deg)`
      : props.direction === 'South'
      ? `rotate(90deg)`
      : `rotate(180deg)`};
`;

// <StyledCheckbox checked={checked}>

// const CheckedSign = styled.p`
//   color: ${(props) => (props.checked ? 'white' : '#4300ca')};
// `;

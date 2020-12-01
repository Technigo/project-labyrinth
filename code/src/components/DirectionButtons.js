import React from 'react';
import styled from 'styled-components';

export const DirectionButtons = ({ direction }) => {
  return (
    <Arrow role="img" aria-label="east-arrow" direction="South">
      ➤
    </Arrow>
  );
};

const Arrow = styled.span`
  margin: 30px;
  display: inline-block;
  font-size: 55px;
  transform: ${(props) =>
    props.direction === 'North'
      ? `rotate(-90deg)`
      : props.direction === 'East'
      ? `rotate(0deg)`
      : props.direction === 'South'
      ? `rotate(90deg)`
      : `rotate(180deg)`};
  position: absolute;
  top: ${(props) =>
    props.direction === 'North'
      ? 0
      : ''};
  bottom: ${(props) =>
    props.direction === 'South'
      ? `1%`
      : props.direction === 'North' 
      ? `80%`
      : `42%` };
  left: ${(props) =>
    props.direction === 'West'
      ? `1%`
      : props.direction === 'East'
      ? `72%`
      : `34%`};
   right: ${(props) =>
    props.direction === 'East'
      ? `1%`
      : ''};

  @media (max-width: 320px) {
    font-size: 40px;
  }
`;

// <StyledCheckbox checked={checked}>

// const CheckedSign = styled.p`
//   color: ${(props) => (props.checked ? 'white' : '#4300ca')};
// `;

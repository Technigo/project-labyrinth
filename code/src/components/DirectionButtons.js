import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// ----------------------------------------------------------------

export const DirectionButtons = ({ direction, action }) => {
  const dispatch = useDispatch();
  return (
    <DirectionButton
      onClick={(event) => dispatch(action(event))}
      direction={direction}
    >
      <Arrow 
        role='img'
        aria-label={direction + `-arrow`} 
        direction={direction}>
        ➤
      </Arrow>
    </DirectionButton>
  );
};

// ----------------------------------------------------------------

const Arrow = styled.span`
  display: inline-block;
  font-size: 45px;
  margin-top: 20px;
  transform: ${(props) =>
    props.direction === 'North'
      ? `rotate(-90deg)`
      : props.direction === 'East'
      ? `rotate(0deg)`
      : props.direction === 'South'
      ? `rotate(90deg)`
      : `rotate(180deg)`};

  @media (min-width: 580px) {
    font-size: 60px;
  }
`;

const DirectionButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  position: fixed;
  transform: translateY(-50%); // To center vertically
  top: ${(props) =>
    props.direction === 'North'
      ? '30px'
      : props.direction === 'East' || props.direction === 'West'
      ? 'calc(50%)'
      : ''};
  bottom: ${(props) => (props.direction === 'South' ? '20px' : '')};
  left: ${(props) => (props.direction === 'West' ? '20px' : '')};
  right: ${(props) => (props.direction === 'East' ? '20px' : '')};

  &:hover {
    cursor: pointer;
  }
`;

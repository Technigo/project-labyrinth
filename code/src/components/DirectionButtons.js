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
      <DirectionText direction={direction}>Go {direction}</DirectionText> 
    </DirectionButton>
  );
};

// ----------------------------------------------------------------

const Arrow = styled.span`
  display: inline-block;
  font-size: 45px;
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
  display: ${(props) => props.direction === 'East' || props.direction === 'West' ? 'flex' : ''};
  flex-direction: ${(props) => props.direction === 'East' ? 'row-reverse' : props.direction === 'West' ? 'row' : ''};
  align-items: center;
  justify-content: center; 
  
  transform: translateY(-50%); // To center vertically
  top: ${(props) =>
    props.direction === 'North'
      ? '70px'
      : props.direction === 'East' || props.direction === 'West'
      ? '50%'
      : ''};
  bottom: ${(props) => (props.direction === 'South' ? '-30px' : '')};
  left: ${(props) => (props.direction === 'West' ? '20px' : '')};
  right: ${(props) => (props.direction === 'East' ? '20px' : '')};

  &:hover {
    cursor: pointer;
  }
`;

const DirectionText = styled.p`
transform: ${(props)=> (props.direction === 'East' ? 'rotate(90deg)': props.direction === 'West' ? 'rotate(-90deg)':'')}
`;

import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';

import { labyrinth } from '../reducers/labyrinth';

import { OuterFlexWrapper, InnerFlexWrapper } from '../styling/GlobalStyles';

export const Header = () => {
  const dispatch = useDispatch();
  const handleRestartButton = () => {
    dispatch(labyrinth.actions.setUsername(''));
    localStorage.setItem('labyrinth', '{}');
    localStorage.setItem('username', '');
    localStorage.setItem('history', '[]');
    window.location.reload();
  };

  return (
    <HeaderWrapper>
      <HeaderImageLeft src="./assets/maze-icon.png" />
      <RestartButtonWrapper>
        <RestartButtonText>Restart</RestartButtonText>
        <HeaderImageButton onClick={handleRestartButton}>
          <HeaderImageRight src="./assets/back-icon-centered.png" />
        </HeaderImageButton>
      </RestartButtonWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(OuterFlexWrapper)`
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  top: 20px;
`;

const HeaderImageLeft = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 20px;
`;

const RestartButtonWrapper = styled(InnerFlexWrapper)`
  flex-direction: row;
`;

const RestartButtonText = styled.p`
  font-family: 'Helvetica';
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
  color: #fff;
`;

const HeaderImageRight = styled.img`
  width: 25px;
  height: 25px;
  transform: rotate(180deg);

  &:hover {
    animation: Rotate 0.7s infinite linear;
    cursor: pointer;

    @keyframes Rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

const HeaderImageButton = styled.button`
  background: none;
  border: none;
  margin: 0 20px 0 10px;
`;

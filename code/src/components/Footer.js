import React from 'react';
import styled from 'styled-components/macro';

import { OuterFlexWrapper, InnerFlexWrapper } from '../styling/GlobalStyles';

export const Footer = ({ setHistoryVisible }) => {
  const handleClick = () => {
    setHistoryVisible(true);
  };
  return (
    <FooterWrapper>
      <DirectionsButtonWrapper>
        <FooterImageButton onClick={() => setHistoryVisible(true)}>
          <FooterImageLeft src="./assets/directions-icon.png" />
        </FooterImageButton>
        <FooterText>Show current path</FooterText>
      </DirectionsButtonWrapper>
      <FooterTextRight>
        A website created by Gabriella Bolin & Karin Nordkvist @ Technigo 16/24
      </FooterTextRight>
    </FooterWrapper>
  );
};

const FooterWrapper = styled(OuterFlexWrapper)`
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  bottom: 20px;
`;

const DirectionsButtonWrapper = styled(InnerFlexWrapper)`
  flex-direction: row;
`;

const FooterText = styled.p`
  font-family: 'Helvetica';
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
  color: #fff;
`;

const FooterTextRight = styled(FooterText)`
  text-align: right;
  margin-right: 20px;
  max-width: 35vw;
`;

const FooterImageLeft = styled.img`
  width: 20px;
  height: 20px;
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

const FooterImageButton = styled.button`
  background: none;
  border: none;
  margin: 0 10px 0 20px;
`;

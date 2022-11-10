import React from 'react';
import styled from 'styled-components/macro'

const Footer = () => {

  return (
    <FooterWrapper>
      <FooterText>
        <p>A website made by Kaja Wilbik, Amanda Elvkull & Ulrika Öhman @ Technigo — 12/24</p>
        <p>Copyright 2022 — Images from NightCafe</p>
      </FooterText>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    position: fixed;
    bottom: 20px;

    @media (max-width: 767.98px){
      bottom: 15px;
    }
`

const FooterText = styled.p`
    font-family: var(--font-secondary);
    text-align: right;
    font-size: 12px;
    margin-right: 20px;
    color: var(--color-white);

    @media (max-width: 767.98px){
      text-align: center;
      //margin-right: 0;
      margin: 0 55px;
    }
`

export default Footer;
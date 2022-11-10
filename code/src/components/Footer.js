import React from 'react';
import styled from 'styled-components/macro'

const Footer = () => {

  return (
    <div>
      <FooterText>
        <p>A website made by Kaja Wilbik, Amanda Elvkull & Ulrika Öhman @ Technigo — 12/24</p>
        <p>Copyright 2022 — Icons from Noun Project</p>
      </FooterText>
    </div>
  )
}

const FooterText = styled.p`
    font-family: var(--font-secondary);
    text-align: left;
    font-size: 12px;
    margin-left: 20px;
    color: var(--color-white);
`

export default Footer;
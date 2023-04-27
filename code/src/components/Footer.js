import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterSection>
      <StyledA href="https://www.linkedin.com/in/emiliasaberski/">
        <Name>Emilia</Name>
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
      </StyledA>
      <StyledA href="https://www.linkedin.com/in/fridanordenlow/">
        <Name>Frida</Name>
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
      </StyledA>
      <StyledA href="https://www.linkedin.com/in/andrea-hedstr%C3%B6m-3549a516b/">
        <Name>Andrea</Name>
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
      </StyledA>
    </FooterSection>
  )
}

const FooterSection = styled.div`
font-size: 14px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
gap: 30px;
bottom: -100px;
`
const FontAwesomeIcon = styled.div`
  width: 30px;
  color: grey;
  &:hover {
    color: rgb(58, 209, 225);
}
`

const StyledA = styled.a`
text-decoration: none;
`

const Name = styled.p`
color: grey;
`
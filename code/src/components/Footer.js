import React from 'react';
import styled from 'styled-components/macro';

export const Footer = () => {
  return (
    <FooterSection>
      <StyledA href="https://www.linkedin.com/in/emiliasaberski/">Emilia
        <i className="fa-brands fa-linkedin-in" />
      </StyledA>
      <StyledA href="https://www.linkedin.com/in/fridanordenlow/">Frida
        <i className="fa-brands fa-linkedin-in" />
      </StyledA>
      <StyledA href="https://www.linkedin.com/in/andrea-hedstr%C3%B6m-3549a516b/">Andrea
        <i className="fa-brands fa-linkedin-in" />
      </StyledA>
    </FooterSection>
  )
}

const FooterSection = styled.div`
  font-size: 17px;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
  bottom: 0;
  left: 0;
  margin-top: 20px;
  margin-bottom: 10px;
  height: 2.5rem;
`

const StyledA = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: grey;
  &:hover {
    color: white;
  }
`
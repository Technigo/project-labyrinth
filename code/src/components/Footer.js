import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <a href="https://www.linkedin.com/in/annika-lindberg-a3398b263/"><img src="/images/annika.jpg" className="contact-logo" alt="link to Annika's LinkedIn" /></a>
        <a href="https://fiona-klacar-portfolio.netlify.app/"> <img src="" className="contact-logo" alt="link to Fiona's portfolio" /></a>
      </div>
      <div>
        <p>Created by Annika and Fiona | Technigo Bootcamp Spring 2003</p>
      </div>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.div`
  background-color: yellow;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 65px;
  `
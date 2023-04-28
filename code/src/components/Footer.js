import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Created by Annika and Fiona |</p>
      <a href="https://annikalindberg-portfolio.netlify.app/">
        <FooterImage src="/images/Annika-Lindberg.jpg" className="contact-logo" alt="link to Annika's portfolio" />
      </a>
      <a href="https://fiona-klacar-portfolio.netlify.app/">
        <FooterImage src="/images/Fiona-Klacar.jpg" className="contact-logo" alt="link to Fiona's portfolio" />
      </a>
      <p>| Technigo Bootcamp Spring 2023</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
  background-color: rgb(138 106 148 / 80%);
  border-top: 2px solid black;
  opacity: 0.95;
  `

const FooterImage = styled.img`
  width: 30px;
  padding-left: 5px;
  padding-right: 5px;
  opacity: 0.8;

  &:hover {
    transform: scale(1.2);
  }
  `

export default Footer;
import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <a href="https://annikalindberg-portfolio.netlify.app/">
        <FooterImage src="/images/Annika-Lindberg.jpg" className="contact-logo" alt="link to Annika's portfolio" />
      </a>
      <a href="https://fiona-klacar-portfolio.netlify.app/">
        <FooterImage src="/images/Fiona-Klacar.jpg" className="contact-logo" alt="link to Fiona's portfolio" />
      </a>
      <p>Created by Annika and Fiona | Technigo Bootcamp Spring 2003</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  
  `
const FooterImage = styled.img`
  width: 30px;
  `

export default Footer;
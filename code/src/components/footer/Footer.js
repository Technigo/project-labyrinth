import React from 'react';
import { BodyText } from 'components/global-style/Text';
import { ContactMeStyles, FooterStyles } from './Footer.styles';

export const Footer = () => {
  return (
    <FooterStyles>
      <ContactMeStyles>
        <a href="https://bridgetmailley.com/"><img src="/assets/bridget.jpg" alt="link to Bridget's portfolio" /></a>
        <a href="https://fannystenberg.netlify.app/"><img src="/assets/fanny.jpg" alt="link to Fanny's portfolio" /></a>
      </ContactMeStyles>
      <div>
        <BodyText>Designed by Bridget & Fanny. Technigo Web Development Bootcamp 2023.</BodyText>
        <BodyText>Icons from <a href="https://www.flaticon.com/">Flaticon</a></BodyText>
      </div>
    </FooterStyles>
  )
}
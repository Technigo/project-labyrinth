import React from 'react'
import styled from "styled-components/macro"

const FooterWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`

const FooterText = styled.p`
  margin: 0;
  font-size: 12px;
  text-align: center;
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>This is a project made via the Technigo front-end bootcamp, Fall 2020. Made by: Emelie Svensson, Hanna Skeppe, and Johanna Blom</FooterText>
      <FooterText>Icons from Freepik, Images from...  </FooterText>
    </FooterWrapper>
  )
}
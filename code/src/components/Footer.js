import React from "react"
import styled from "styled-components"

export const Footer = () => {
  return (
    <>
      <FooterBox>
        <Text>Developed and Designed by Pinar & Alexandra © 2021</Text>
      </FooterBox>
    </>
  )
}

const FooterBox = styled.footer`
  position: fixed;
  bottom: 20px;
  color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  padding: 10px;
`

const Text = styled.p`
  margin: 20px 0 0 0;
  color: white;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

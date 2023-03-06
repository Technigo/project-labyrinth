import React from 'react';
import styled from 'styled-components/macro';
import { Devices } from './mainStyles';
import piImg from '../Images/pi.png';
import linuxImg from '../Images/linux.png';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Text>This is a project made by Linda Malm for educational purposes</Text>
        <Text><Link href="https://github.com/malmen237/project-labyrinth">Check out my code in GitHub</Link></Text>
        <Text>This page is hosted on a server that is built by me.</Text>
        <ImageWrapper>
          <Pi src={piImg} alt="raspberry pi logo" />
          <Linux src={linuxImg} alt="linux penguin logo" />
        </ImageWrapper>
      </div>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.section`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 30%;
`

const Text = styled.p`
  color: #43B771;
  font-size: 1.2em;
  font-weight: 400;
  padding: 1%;
  line-height: 1.2;

  @media ${Devices.tablet} {
    font-size: 1.3em;
  }

  @media ${Devices.desktop} {
    font-size: 1.4em;
  }
`

const Link = styled.a`
  color: #43B771;
  cursor: pointer;
  text-decoration: none;

  @media ${Devices.laptop} {

    &:hover {
      text-decoration: underline;
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`

const Linux = styled.img`
  display: block;
  height: 80px;
  width: auto;
`

const Pi = styled.img`
  display: block;
  margin-top: 1.5%;
  height: 45px;
  width: auto;
`

import React from "react";
import styled from "styled-components/macro";

import { Centered, SmallText } from '../lib/Styling';

const FooterText = styled(SmallText)`
  margin: 0;
`;

export const Footer = () => {
  return (
    <Centered>
      <FooterText>Technigo Bootcamp Fall 2020</FooterText>
      <FooterText>&#169; 2020 Henrike Wiemker Sandrine Elander</FooterText>
    </Centered>
  );
};
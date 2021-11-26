import { CompassAnimation } from "components/CompassAnimation";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 20px 10px;
  margin: 10px;
  width: 50%;
  height: fit-content;
  border-radius: 6px;
  background: gray;
  color: black;
  justify-self: center;
  opacity: 0.8;
  display: inline-block;

  @media (max-width: 667px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  color: #32281f
`;

const SecondaryText = styled.h3`
  color: #e3cf8e;
  margin-bottom: 10px;
`;

export const Card = ({ title, thumbnailUrl, secondaryText }) => (
  <Container>
    {title && <Title>{title}</Title>} 
    {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
    {thumbnailUrl && <CompassAnimation width= '80px' height= '80px' />}
  </Container>
);

import { CompassAnimation } from "components/CompassAnimation";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 20px 0;
  margin: 2px;
  width: 50%;
  border-radius: 6px;
  background: gray;
  color: black;
  text-align: center;
  justify-self: center;
  opacity: 0.8;
  display: inline-block;
  padding-top: 30px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 30px;
  padding-bottom: 50px;
  text-align: center;
`;

const SecondaryText = styled.div`
  width: 100px;
  height: 70px;
  color: red;
  padding-top: 50px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
`;

export const Card = ({ title, thumbnailUrl }) => (
  <Container>
    <TitleBar>
      <div>{title && <Title>{title}</Title>}</div>
    </TitleBar>

    {thumbnailUrl && <CompassAnimation width= '100px' height= '100px' />}
  </Container>
);

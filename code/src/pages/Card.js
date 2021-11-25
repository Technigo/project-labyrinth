import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 20px;
  border-radius: 6px;
  background: lightgray;
`;

const Title = styled.p`
  margin: 0;
  font-size: 24px;
`;

const SecondaryText = styled.div`
  width: 100px;
  height: 70px;
  color: red;
`;

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
`;
const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

export const Card = ({ title, secondaryText, thumbnailUrl }) => (
  <Container>
    <TitleBar>
      {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}

      <div>
        {title && <Title>{title}</Title>}
        {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
      </div>
    </TitleBar>
  </Container>
);

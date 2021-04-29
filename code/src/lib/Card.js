import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  margin-top: 20px;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding: 20px;
  background-color: white;
  width: 220px;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
`;

const TextContent = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  color: #6203ee;
  font-weight: 500px;
  margin: 40px 0 0 10px;
  padding: 5px;

  &:hover {
    background-color: #fafafa;
  }
`;

const Title = styled.div`
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
`;

const SubHeading = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
`;

export const Card = ({ title, subheading, btnfunction }) => {
  return (
    <Container>
      <TextContent>
        {title && <Title>{title}</Title>}
        {subheading && <SubHeading>{subheading}</SubHeading>}
      </TextContent>
      <ButtonContainer>
        <Button onClick={btnfunction}></Button>
      </ButtonContainer>
    </Container>
  );
};
import React from "react";
import styled from "styled-components/macro";
import { StyledButton } from "./Buttons";
import { CardText } from "lib/Text";

const StyledCard = styled.div`
  width: 230px;
  height: 350px;
  border: 2px solid #4cff42;
  border-radius: 4px;
  padding: 24px;
  margin-right: 40px;

  @media (max-width: 668px) {
    margin: auto;
    margin-bottom: 20px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Card = ({ description, buttonText, onClick }) => (
  <StyledCard>
    <CardContent>
      <CardText>{description}</CardText>
      <StyledButton small onClick={onClick}>
        {buttonText}
      </StyledButton>
    </CardContent>
  </StyledCard>
);

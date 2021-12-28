import React from 'react';
import styled from 'styled-components';
export const Footer = () => {
  return (
    <StyledFooter>
      <h1>
        ©
        <a
          href="https://github.com/HedvigM"
          tabindex="0"
          role="button"
          aria-pressed="false"
          aria-label="Link to my profile github"
          target="_blank"
          rel="noreferrer">
          Hedvig Mejstedt
        </a>
        | Team Lions
        <span aria-label="lion" role="img">
          🦁
        </span>
        | Technigo
      </h1>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  font-family: var(--font);
  background-color: #ff885e;
  border-top: 3px solid black;
  text-align: center;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;

  h1 {
    font-size: 1.2em;
  }

  a {
    font-family: var(--font);
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: #ffc16a;
    border: 1px solid black;
    padding: 2px;
  }
`;

import styled, { css } from 'styled-components';

const commonButtonStyles = css`
  &:hover {
    background-color: rgb(115, 215, 115);
    color: white;
    text-shadow: 1px 1px black;
  }
  @media screen and (max-width: 667px) {
    margin-top: 1rem;
  }
`;

// Submit button
export const SubmitBtn = styled.button`
  margin-top: 1rem;
  padding: 8px 12px;
  font-family: Sigmar;
  font-size: 1.4rem;
  border-radius: 4px;
  border: none;
  background-color: #9fc5e8;
  cursor: pointer;

  ${commonButtonStyles}

  @media screen and (max-width: 667px) {
    margin-left: 1rem;
  }
`;

// Restart button
export const RestartBtn = styled.button`
    margin: 4px;
    padding: 10px 14px;
    font-family: Sigmar;
    font-size: 1.2rem; 
    border-radius: 4px;
    border:none;
    background-color: pink;
    cursor: pointer;
    margin-top: 2rem;

    ${commonButtonStyles}
`

// Option buttons
export const OptionBtn = styled.button`
    height: 3rem;
    margin: 4px;
    padding: 0 14px 0 14px;
    font-family: Sigmar;
    font-size: 1.4rem;
    border-radius: 4px;
    border:none;
    background-color: #9fc5e8;
    cursor: pointer;

    ${commonButtonStyles}
    @media screen and (max-width: 667px) {
      height: 2.4rem; 
    }
`
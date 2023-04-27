import styled from 'styled-components';

// Button styling inspired by https://codepen.io/reulison/pen/WNNVPZq

export const Button = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: var(--button-font-family);
    font-size: 1rem;
    font-weight: 600;
    border: none; 
    padding: 0.7rem 1rem;
    margin: 0.625rem 0;
    transition-duration: 0.4s;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgba(211, 211, 211, 0.8);
    text-shadow: -1px -1px black, 1px 1px white;
    color: gray;
    border-radius: 0.438rem;
    box-shadow: 0 .2em gray; 
`;

export const StartButton = styled(Button)`
    display: inline-block;


   &:hover {
    transition-duration: 0.4s;
    font-size: 2rem;
  }
`;

export const NorthButton = styled(Button)`
    display: inline-block;

   &:hover {
   transition-duration: 0.4s;
    font-size: 2rem;
  }
`;

export const EastButton = styled(Button)`
    display: inline-block;

    &:hover {
    transition-duration: 0.4s;
    font-size: 2rem;
  }
`;

export const SouthButton = styled(Button)`
    display: inline-block;

    &:hover {
    transition-duration: 0.4s;
    font-size: 2rem;
  }
`;

export const WestButton = styled(Button)`
    display: inline-block; 

    &:hover {
    transition-duration: 0.4s;
    font-size: 2rem;
  }
`;

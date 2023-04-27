import styled from 'styled-components';

// Button styling inspired by https://codepen.io/reulison/pen/WNNVPZq

export const ResetButton = styled.button`
    line-height: 1.5em;
    text-align: center;
    display: inline-block;
    width: 7em;
    -webkit-border-radius: .75em;
    -moz-border-radius: .75em;
    -o-border-radius: .75em;
    border-radius: 50%;
    background-color: red;
    -webkit-box-shadow:  0 .2em maroon;
    -moz-box-shadow:  0 .2em maroon;
    -o-box-shadow:  0 .2em maroon;
    box-shadow:  0 .5em maroon;
    margin: 5px;
    background-color: rgba(214, 10, 10, 0.8);
    background-image: -o-linear-gradient(left top, pink 3%, red 22%, maroon 99%);
    background-image: -moz-linear-gradient(left top, pink 3%, red 22%, maroon 99%);
    background-image: -webkit-linear-gradient(left top, pink 3%, red 22%, maroon 99%);
    background-image: linear-gradient(left top, pink 3%, red 22%, maroon 99%);
    text-shadow: 1.2px 1.2px pink, -1.4px -1.4px maroon;
    color: #fff;
    cursor: pointer;
    padding: 2rem 0.313rem;
    font-family: var(--button-font-family);
    border: none;
    text-transform: uppercase;
`;

export const Button = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: var(--button-font-family);
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

      &:hover {
    transition-duration: 0.4s;
    font-size: 1.2rem;
  }
`;

export const StartButton = styled(Button)`
    display: inline-block;
    font-size: 1rem;
`;

export const DirectionButton = styled(Button)`
    display: inline-block;
    font-size: 0.6rem;
`;

export const GoBackButton = styled(Button)`
    display: inline-block;
    font-size: 0.6rem;
`;

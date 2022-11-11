import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  html {
    --pink: #fd616b;
    --orange: #ffa46b;
    --lightYellow: #fff6cf;
    --purple: #683449;
    --lightPink: #ffe0d3;

    font-family: 'Press Start 2P', cursive;
    color: var(--purple);
  }

  body {
    /* background-color: var(--lightPink); */
    background-color: var(--purple);
  }


  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 0.8rem;
  }

  p{
    font-size: 0.7rem;
  }

  input {
    border: 4px solid var(--purple);
    line-height: 2rem;
    margin: 10px;

    ::placeholder{
      font-family: 'Press Start 2P', cursive;
      font-size: 0.5rem;
    }
  }
`

export const DuckContainer = styled.div`
  /* height: 200px;
  width: 200px; */
 /*  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 10px; */
  /* max-width: 100%; */
  display: grid;
  grid-template-columns: 120px auto ;
  align-items: center;
  margin: 30px auto;
  padding: 0 10% 0 10%;

  p{
    line-height: 20px;
  }
  `

export const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  color: var(--purple);
  display: inline;
  font-size: 0.7rem;
  cursor: pointer;
  border: 4px solid var(--purple);
  background-color: #fd616b;
  background-image: linear-gradient(62deg, #fd616b 0%, #ffa46b 36%, #fff6cf 82%);
  padding: 15px 25px;
  margin: 20px;
  box-shadow: 6px 5px 0px 0px rgba(0,0,0,0.65);
  
`


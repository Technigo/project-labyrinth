import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  html {
    --pink: #fd616b;
    --orange: #ffa46b;
    --lightYellow: #fff6cf;
    --purple: #683449;

    font-family: 'Press Start 2P', cursive;
    color: var(--purple);
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1rem;
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
    font-size: 15px;
    line-height: 20px;
  }
  `


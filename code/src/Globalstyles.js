/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
   }

   body {
      background: #f1f1f1;
  }

`

export const MainContainer = styled.section`
    position: relative;
    margin: 5rem;
`

export const GameWrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
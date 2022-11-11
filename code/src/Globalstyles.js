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
      background: url('https://images.unsplash.com/photo-1464809142576-df63ca4ed7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
      background-size: auto;

      @media (min-width: 1280px) {
        background: url('https://images.unsplash.com/photo-1464809064666-ef22abde2569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
        background-size: cover;
    }
  }

  main {
    position: relative;
  }

`

export const GameWrapper = styled.div`
    margin: 20vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #2a53575c;
    text-align: center;
    align-items: center;


    h1 {
        font-size: 1.2rem;
        color: #fff;
    }

    form {
        display: flex;
        flex-direction: column;
    }

`
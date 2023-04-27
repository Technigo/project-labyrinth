/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalRules = createGlobalStyle`
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "JetBrains Mono", monospace;
   }
   body {
      background: url('https://images.unsplash.com/photo-1532062493181-1b3cff68c8fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
      background-size: auto;
      background-position: center;
      background-attachment: fixed;
      @media (min-width: 1024px) {
        background-size: cover; 
      }
  }
  main {
    position: relative;
  }
`

export const GameWrapper = styled.div`
    margin: 10vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: ${(props) => (props.bgColor || '#6c8a94c7')};
    text-align: center;
    align-items: center;
    h1 {
      font-size: 1.2rem;
      color: #fff;
      text-shadow: 1px 1px 2px #160000, 0 0 1em #21137aed, 3px 2px 0em #073047ed;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px;
    }
    
    label {
      color: #fff;
      font-size: 0.8rem;
      padding-bottom: 10px;
    }
    #usernameInput {
      padding: 10px;
      width: 155px;
      border-radius: 8px;
      background: #fcfdfc;
    }
    #gameEnd {
      font-size:1.4rem;
    }
    @media (min-width: 768px) {
      margin: 20vw;
    }
`
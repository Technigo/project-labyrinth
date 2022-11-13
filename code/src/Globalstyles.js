import styled from 'styled-components/macro'
import bgStart from './assets/bg_start.svg'

// ------ App.js -----------

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    background-image: url(${bgStart}) ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 95%;
   
    /* @media screen and (min-width: 668px) {
        background-position-y: 75%;
        justify-content: space-around;
    } */
`;

// ------ StartPage---------

export const StartPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     width: 80%;
    height: 100vh;
    
    /* border: 3px solid lightblue; */
`;

export const WelcomeText = styled.h1`
    text-align: center;
    color: var(clr-accent);
    width: 85%;
    font-family: var(--font-pixel);
    font-size: 1.5rem;
    text-shadow: 1px 1px 1px var(--clr-secondary);
    margin-top: 1rem;
    margin-bottom: 3rem;
    line-height: 1.3em;

  @media screen and (min-width: 668px) {
      width: 70%;
      font-size: 2rem;
      margin: 2rem 0 3rem;
  }
`;

export const NameForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: relative; */

`;

export const StyledInput = styled.input`
    border: 4px solid;
    border-color: black;
    width: 300px;
    height: 50px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 0.6rem;
    /* padding: 5px; */
    text-align: center;
    font-family: var(--font-pixel);

    &:hover,
    &:focus {
        outline: none;
        border-color: purple;
    }
    @media screen and (min-width: 668px) {
        width: 400px;
        height: 70px;
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }
`;

export const SendNameBtn = styled.button`
    font-size: 1rem;
    border: 4px solid;
    border-color: black;
    width: 300px;
    height: 50px;
    padding: 10px;
    margin-bottom: 2rem;
    font-weight: bold;
    font-family: var(--font-pixel);
    color: black;
    &:hover,
    &:focus {
        border-color: purple;
    }
    @media screen and (min-width: 668px) {
        width: 400px;
        height: 70px;
        font-size: 1.3rem;
        margin-bottom: 8rem;
    }
`;


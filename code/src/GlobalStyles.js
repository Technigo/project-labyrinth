import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const OuterWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InnerWrapper = styled.div`
    //outline: 1px solid red;
    display: flex;
    align-items: center;
    flex-direction: column; 
`

export const TextWrapper = styled.div`
    //outline: 1px solid red;
    display: flex;
    flex-direction: column;
    max-width: 50vw;
`

export const BigText = styled.p`
    font-family: var(--font-main);
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
    color: var(--color-white);
`

export const SmallerText = styled.p`
    font-family: var(--font-secondary);
    font-size: 20px;
    text-align: center;
    color: var(--color-white);
`

export const Button = styled.button`
    background-color: transparent;
    border: 2px solid var(--color-white);
    font-family: var(--font-secondary);
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-white);
    padding: 5px 20px;
    margin: 10px 0 25px;
    cursor: pointer;

    :hover {
      transform: scale(1.1);
    }
`

export default GlobalStyles;
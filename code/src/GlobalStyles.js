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

export const TextWrapper = styled.div`
    //outline: 1px solid red;
    max-width: 50vw;
    display: flex;
    flex-direction: column;
`

export const BigText = styled.h2`
    font-family: var(--font-main);
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
    color: var(--color-white);
`

export const Paragraph = styled.p`
    font-family: var(--font-secondary);
    font-size: 20px;
    text-align: center;
    color: var(--color-white);
`

export const SmallText = styled.p`
    font-family: var(--font-secondary);
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--color-white);
`

export default GlobalStyles;
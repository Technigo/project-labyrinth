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

    @media (max-width: 767.98px){
        max-width: 85vw;
    }
`

export const BigText = styled.p`
    font-family: var(--font-main);
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
    color: var(--color-white);

    @media (max-width: 767.98px){
        font-size: 20px;
        line-height: 22px;
        margin-bottom: 15px;
    }
`

export const SmallerText = styled.p`
    font-family: var(--font-secondary);
    font-size: 20px;
    text-align: center;
    color: var(--color-white);

    @media (max-width: 767.98px){
        font-size: 18px;
        line-height: 20px;
    }
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
    margin: 15px 0 25px;
    cursor: pointer;

    @media (max-width: 767.98px){
        margin: 13px 0 20px;
    }

    :hover {
        transform: scale(1.1);
    }
`

export default GlobalStyles;
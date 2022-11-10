import styled from 'styled-components'

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    text-align: center;
    // border: solid green 1px;
    color: white;
`

export const OuterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: white;
    color: black;
    font-weight: 700;
    border: none;
    margin: 20px 10px 0px 10px;
`
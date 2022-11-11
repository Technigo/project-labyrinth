import styled from 'styled-components'

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    text-align: center;
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
    background-color: white;
    color: black;
    font-weight: 700;
    padding: 16px 0;
    border: none;
`

export const RestartButton = styled(Button)`
    margin-top: 30px;
    padding-left: 5%;
    padding-right: 5%;
`

export const BackButton = styled(Button)`
    margin-top: 30px;
    padding-left: 5%;
    padding-right: 5%;
`
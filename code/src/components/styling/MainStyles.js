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
    background-color: black;
    color: orange;
    font-weight: 700;
    padding: 16px 0;
    border: 2px solid white;
    &:hover {
        background-color: white;
        color: black;
      }
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
import styled from 'styled-components/macro'

export const EndGamePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 600px;
    margin: 50px auto;
    @media (min-width: 768px) {
        max-width: 800px;
        margin: 180px auto;
        }
`

export const Header = styled.h3`
    margin: 30px 5px;
    display: flex;
    justify-content: center;
    text-align: center;
`

export const RestartButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`

export const Credits = styled.p`
    font-size: 10px;
    text-align: center;
    margin: 20px 0;
`
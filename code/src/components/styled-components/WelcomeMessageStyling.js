import styled from 'styled-components'

export const WelcomeMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 5px;
    width: 95%;
    max-width: 600px;
    margin: 5px auto;
    word-break: break-word;
    @media (min-width: 768px) {
        margin: 180px auto;
        }
`

export const Header = styled.h2`
    margin: 30px 5px;
`

export const ButtonContainer = styled.div`
    margin: 30px 0;
`
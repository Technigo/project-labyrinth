import styled from 'styled-components'

export const WelcomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 600px;
    margin: 50px auto;
    @media (min-width: 768px) {
        margin: 180px auto;
        }
`

export const HeaderContainerStyling = styled.header`
    display: flex;
    justify-content: center;
    margin: 50px;
`

export const MainHeader = styled.h1`
    color: white;
    text-align: center;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`

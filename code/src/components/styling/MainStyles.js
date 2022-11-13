import styled from 'styled-components'

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    text-align: center;
    color: white;

    @media (min-width: 768px) {
        width: 70%;
    }

    @media (min-width: 992px) {
        width: 60%;
    }
`

export const OuterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 0;
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
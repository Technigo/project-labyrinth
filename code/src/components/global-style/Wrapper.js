import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 90%;
    margin: 0 auto;
    background-color: black;
    color: white;
    opacity: 0.8;
    border-radius: 40px;

    @media (min-width: 667px) {
        width: 70%;
    }
`
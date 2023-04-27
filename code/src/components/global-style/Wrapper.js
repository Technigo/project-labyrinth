import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 90%;
    margin: 10px auto;
    background-color: rgb(0, 0, 0, .5);
    color: white;
    /* opacity: 0.8; */
    border-radius: 40px;

    @media (min-width: 667px) {
        width: 70%;
    }
`
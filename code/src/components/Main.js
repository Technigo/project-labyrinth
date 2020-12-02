import styled from 'styled-components/macro'

export const Main = styled.main`
    display: grid;
    grid-template-rows: min-content;
    justify-content: center;
    padding: 10px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    `

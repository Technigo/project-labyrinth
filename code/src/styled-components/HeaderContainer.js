import styled from 'styled-components';

export const HeadingArea = styled.header`
    text-align: center;
    font-family: 'Mystery Quest', cursive;
    font-size: 30px;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const HeaderDiv = styled.div`
    width: 90%; 
    margin: auto;
    border: 3px solid white;
    padding: 10px 0;
    @media(min-width: 1024px) {
        width: 70%;
    }
`;

export const Text = styled.h1`
    margin: 0;
`;

export const Image = styled.img`
    width: 150px;
    background-color: white;
    padding: 10px;
    border-radius: 3px;
`;
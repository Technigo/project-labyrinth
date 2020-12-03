import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
`;

export const FinishText = styled.p`
    font-family: 'Mystery Quest', cursive;
    color: hotpink; 
    font-size: 30px;
    background: rgba(255,255,255, 0.8);
    padding: 10px;  
    margin-bottom: 20px;
`;

export const TopDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: rgba(255,255,255, 0.8);
    padding: 10px; 
    margin-top: 20px;
`;

export const Bold = styled.span`
    font-weight: bold;
    color: #d89ff9;
`;

export const Coordinates = styled.p`
    font-family: 'Mystery Quest', cursive;
    color: hotpink; 
    font-size: 25px;
    padding: 10px;  
    margin: 0;
`;

export const SemiBold = styled.span`
    font-weight: bold;
`;

export const FinalImage = styled.img`
    width: 300px;
`;

export const Text = styled.p`
    color: hotpink;
    padding: 10px; 
    margin: 0 0 20px 0;
    font-size: 20px; 
`;

export const ButtonWrapper = styled.div`
    margin: auto;
    display: flex;
    text-align: initial;
    width: 150px;
    height: 150px;
    cursor: pointer;
`;

export const ButtonShape = styled.div`   
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: white;
    background: linear-gradient(-180deg, white, #f4dbb8);
    display: flex;
    align-content: center;
    justify-content: center;
    transition: 0.5s;
    &:before, &:after {
        position: absolute;
        content: "";
        background: inherit;
        height: 100%;
        width: 100%;
        border-radius: 0;
        transition: 0.5s;
        transform-origin: center;
    }
    &:before {
        transform: rotateZ(60deg);
    }
    &:after {
        transform: rotateZ(-60deg);
    }
    &:hover {
        border-radius: 50px;
        transition: 0.5s;
    }
    &:hover:before {
        border-radius: 50px;
        transition: 0.5s;
    }
    &:hover:after {
        border-radius: 50px;
        transition: 0.5s;
    }
`;

export const Button = styled.button`
    border: none;
    z-index: 1;
    margin: auto;
    font-size: 25px;
    font-family: 'Mystery Quest', cursive;
    color:  #ffc16b;
    background-clip: text;
    -webkit-background-clip: text;
    cursor: pointer;
`;
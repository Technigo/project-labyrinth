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

export const TopDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: rgba(255,255,255, 0.8);
    padding: 10px; 
    margin-top: 10px;
`;

export const Coordinates = styled.p`
    font-family: 'Mystery Quest', cursive;
    color: hotpink; 
    font-size: 25px; 
    margin: 0;
`;

export const Bold = styled.span`
    font-weight: bold;
`;

export const MoveText = styled.p`
    padding: 10px;
    color: hotpink;   
    font-size: 20px; 
    margin: 0;
`;

export const ChooseText = styled.p`
    background: rgba(255,255,255, 0.8);
    padding: 10px;
    color: hotpink; 
    font-size: 20px; 
    margin-bottom: 0;
`;

export const Text = styled.p`
    color: hotpink;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MovingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    @media (min-width: 650px) {
        align-content: stretch;
        flex-direction: row;
    }
`;

export const DirectionWrapper = styled.div` 
    border: 10px solid;
    border-image: linear-gradient(45deg, #b2f7db, #f4dbb8, #e6c2fb,#c1cafb) 1;
    padding: 3px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px;
    min-width: 250px;
    max-width: 350px;
    min-height: fit-content;
    max-height: 500px; 
    @media (min-width: 650px) {
        width: 50%;
        margin-right: 10px;
    }
`;

export const InnerDiv = styled.div`
    background: transparent; 
    align-content: stretch;
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

export const BackButtonShape = styled.div`   
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: white;
    background: linear-gradient(-180deg, white, #e6c2fb);
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

export const BackButton = styled.button`
    border: none;
    z-index: 1;
    margin: auto;
    font-size: 30px;
    font-family: 'Mystery Quest', cursive;
    color:  #c46ff6;
    background-clip: text;
    -webkit-background-clip: text;
    cursor: pointer;
`;
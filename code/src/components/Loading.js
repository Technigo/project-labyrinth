import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Animation } from "./Animation";


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    text-align: center;
`;

const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Mystery Quest', cursive;
    font-size: 25px;
    color: hotpink;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    margin-bottom: 10px;
`;

export const Loading = () => {
    const isLoading = useSelector((store) => store.ui.isLoading);

    return  (
        <MainContainer>
            {isLoading &&  
            <>           
                <Loader>Labyrinth is loading!</Loader>           
                <Animation />
            </>
            }
        </MainContainer>
    );
};
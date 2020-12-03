import React from "react";
// import Animation from "./Animation";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Loader = styled.div`
    font-family: 'Mystery Quest', cursive;
    font-size: 25px;
    color: hotpink;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
`;

export const Loading = () => {
    const isLoading = useSelector((store) => store.ui.isLoading);

    return  (
        <>
            {isLoading &&             
            <Loader>Labyrinth is loading!</Loader>           
            // <Animation/>
            }
        </>
    );
};

export default Loading;
import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderContainer = styled.div`
    background: cadetblue;
    height: 100px;
    margin: 100px auto;
    max-width: 20%;
`
const rotate = keyframes`
  from {
        transform: rotate(0deg)
    }
  to {
        transform: rotate(360deg)
    }
`;

const LoaderImg = styled.button`
    width: ${props => props.size};
    background-color: ${props => props.color};
    margin: 0 auto;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    height: 50px;
    border: none;
    animation: 1s linear infinite ${rotate};
    transform-origin: 50% 100%;
    position: relative;
`

const NotLoaderImg = styled.button`
    width: ${props => props.size};
    background-color: ${props => props.color};
    margin: 0 auto;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    height: 50px;
    border: none;
`

const Loader = ({ color, size, loading, setLoading }) => {
    const handleDisable = () => {
        setLoading(!loading)
    }
    return (
        <LoaderContainer>
            {loading && <LoaderImg color={color} size={size} onClick={handleDisable}></LoaderImg>}
            {!loading && <NotLoaderImg color={color} size={size} onClick={handleDisable}></NotLoaderImg>}
        </LoaderContainer>
    );
}

export default Loader;
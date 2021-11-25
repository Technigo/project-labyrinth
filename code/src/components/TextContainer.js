import React from "react";

import styled from "styled-components";

const StyledTextContainer = styled.div`
    box-sizing: border-box;
    padding: 25px 30px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    margin: 10px;
    > * {
        margin: 0;
        padding: 0;
    }
    width: 300px;
    @media (min-width: 768px) {
    width: 500px;
  }
`;

export const TextContainer = ({ move }) => {
    return (
        <StyledTextContainer>
            <p>To the {move.direction}:</p>
            <p> {move.description}</p>
        </StyledTextContainer>
    );
};

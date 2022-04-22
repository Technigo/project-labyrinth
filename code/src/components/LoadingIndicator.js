import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const LoadingIndicator = () => {
  return (
    <Main>
      <div className="loading-container">
        <div className="loading-img-container">
          <img
            className="loading-img"
            src="https://i.ibb.co/ZKSBwtC/Untitled-design-2.gif"
            alt="time passing animation"
          />
        </div>
        <h1>Loading...</h1>
      </div>
    </Main>
  );
};

export default LoadingIndicator;

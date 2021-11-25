import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const HistoryContainer = styled.div`
display: flex;
flex-direction: column;
justify-content; center; 
align-items: center;
text-align: center; 
margin: 10px;
padding-top: 15px;
padding-right: 10px;
padding-bottom: 15px;
padding-left: 10px;
`;

const HistoryText = styled.p`
  font-family: "Lobster Two", cursive;
  font-size: 1.5em;
  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;

const HeadText = styled.h1`
  font-size: 1em;
  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;

const RestartButton = styled.button`
  width: fit-content;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  font-family: "Press Start 2P", cursive;
`;

export const EndPage = () => {
  const history = useSelector((store) => store.game.history);
  const username = useSelector((store) => store.game.username);

  return (
    <HistoryContainer>
      <HeadText>{username}</HeadText>
      <HeadText>You did it!!!</HeadText>
      <span className="star-emoji" role="img" aria-label="star-emoji">
        🌟🌟🌟
      </span>

      <RestartButton onClick={() => window.location.reload()}>
        PLAY AGAIN
      </RestartButton>
      <span className="star-emoji" role="img" aria-label="star-emoji">
        🌟🌟🌟
      </span>
      <HeadText>This was your journey:</HeadText>
      <HistoryText>{history.map((item) => item.description)}</HistoryText>
      <span className="star-emoji" role="img" aria-label="star-emoji">
        🌟🌟🌟
      </span>
    </HistoryContainer>
  );
};

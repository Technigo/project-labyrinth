import styled, { css } from "styled-components";

const sharedStyle = css`
  position: fixed;
  color: #3f3e3e;
  border: 1px solid transparent;
  top: 20px;
  font-size: 18px;
  font-weight: 100;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  padding: 12px;
  border-radius: 6px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const PlayersName = styled.div`
  ${sharedStyle}
  left: 20px;
`;

export const HistoryBtnWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

export const HistoryBtn = styled.button`
  ${sharedStyle}
  right: 20px;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 100;

  &:hover {
    border: 1px solid #3f3e3e;
    transform: scale(1.1);
  }
`;

export const HistoryItemsContainer = styled.div`
  display:flex;
  align-self: flex-end;
  justify-self: center;
  flex-direction: column;
  position: fixed;
  top 0:
  bottom: -100%
  right:0; 
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  padding: 12px;
  font-size: 12px;
  text-align: left;
  color: #3f3e3e;
  border-radius:6px;
  width: 240px;
  margin-top: 40px;
  max-height: calc(100% - 170px);
  overflow-y: scroll;
  z-index: 10;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-top: 80px;
    width: 257px;
  }

`;

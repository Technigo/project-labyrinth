import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
`

export const DirectionButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
  animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
  }
`
export const ShowMoreButton = styled(DirectionButton)`
  color: rgb(151 71 255);
  text-align: left;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 900;
  font-family: 'Bebas Neue', cursive;
  cursor: pointer;
  background: #FFFAF0;
  padding: 2px 5px 0 5px;
  border-radius: 6px;
`

export const SpaceButton = styled.button`
    background: none;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    cursor: pointer;
    position: relative;

    img{
      width: 90%;

      &:hover {
        width: 100%;
      }
    }
  `
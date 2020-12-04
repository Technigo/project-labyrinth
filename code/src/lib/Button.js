import styled from "styled-components/macro"

export const Button = styled.button`
  width: 2.7em;
  height: 2.3em;
  background: rgb(141, 97, 67);
  box-sizing: content-box;
  color: #FEF7E5;
  font-weight: 600;

  border: 1px solid;
  border-radius: 4px;
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(to left,#AA9471,#7A6755, #675444, #7A6755, #AA9471);
  
  @media (min-width: 768px) {
    font-size: 1.3rem;
    }

  ${({ headerBtn }) => headerBtn && `
  box-shadow: 2px 5px 15px -1px rgba(0,0,0,0.85);
  height: 3em;
  width: 7em;
  padding: 0.2em;

  &:hover {
    animation: grow 2s ease-in-out;
    color: #fff;

    @keyframes grow {
      50% {
        transform: scale(1.1);
      }
    }
  }
  `}

  ${({ startBtn }) => startBtn && `
    width: 10em;
    padding: 0.2em;
    &:hover {
      animation: grow 2s ease-in-out;
      color: #fff;
  
      @keyframes grow {
        50% {
          transform: scale(1.1);
        }
      }
    }
    `}

    ${({moveBtn}) => moveBtn &&`
    width: 5em;
    height: 3em;
    &:hover {
      animation: wiggle 2s infinite;
      color: #fff;
      
      @keyframes wiggle {
        5%, 50% {
          transform: scale(1);
        }
        10% {
          transform: scale(0.9);
        }
        15% {
          transform: scale(1.15);
        }
        20% {
          transform: scale(1.15) rotate(-5deg);
        }
        25% {
          transform: scale(1.15) rotate(-3deg);
        }
        30% {
          transform: scale(1.15) rotate(2deg);
        }
        35% {
          transform: scale(1.15) rotate(2deg);
        }
        40% {
          transform: scale(1.15) rotate(0);
        }
      }
    }
    `}
` 

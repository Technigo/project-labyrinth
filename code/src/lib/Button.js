import styled from "styled-components/macro"

export const Button = styled.button`
  width: 2.3rem;
  height: 2rem;
  //background: rgb(88,59,52);
  // WOODEN BACKGROUND: background: radial-gradient(circle, rgba(88,59,52,1) 0%, rgba(126,86,68,1) 84%, rgba(167,114,84,1) 100%);
  // PAPER BAKGROUND:
  background: #C9B692;
  box-sizing: content-box;
  //WOODEN COLOR: color: #f0e7d1;
  //PAPER COLOR: #594638 
  color: #FEF7E5;
  font-weight: 600;
  //BRIGHT PAPER COLOR: color: #fff5dd;

  border: 1px solid;
  border-radius: 4px;
  border-image-slice: 1;
  border-width: 1px;
  // GOLDEN BORDER: border-image-source: linear-gradient(to left,#C88627,#E9AC47, #F7D02E, #E9AC47, #C88627);
  // PAPER BORDER:
  border-image-source: linear-gradient(to left,#AA9471,#7A6755, #675444, #7A6755, #AA9471);
  
  ${({ headerBtn }) => headerBtn && `
  box-shadow: 2px 5px 15px -1px rgba(0,0,0,0.85);
  height: 3em;
  width: 7em;
  padding: 5px;

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
    padding: 5px;
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
` //#8B541B #C88627

import styled from "styled-components/macro"

//This ButtonWrap is only for making it possible to add the keyframes-animation on the directions-btn. 
//It didn't work with only sending in a prop. You'd have to target the parentelement the button was rendered in.
//Since the buttons are rendered inside the CardContainer, all buttons adopted the animation.
//Hence the span, so that only the directions-btns would be targeted.

export const ButtonWrap = styled.span`
`

export const Button = styled.button`
  width: 20%;
  height: 10%;
  //background: rgb(88,59,52);
  // WOODEN BACKGROUND: background: radial-gradient(circle, rgba(88,59,52,1) 0%, rgba(126,86,68,1) 84%, rgba(167,114,84,1) 100%);
  // PAPER BAKGROUND:
  background: #C9B692;
  box-sizing: content-box;
  //WOODEN COLOR: color: #f0e7d1;
  //PAPER COLOR: 
  color: #594638;
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
  height: 100%;
  width: 30%;
  padding: 5px;
  `}

  ${({ startBtn }) => startBtn && `
    width: 80%;
    padding: 5px;`}
  
  ${ButtonWrap}:hover & {
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

` //#8B541B #C88627
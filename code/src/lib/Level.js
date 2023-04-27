/* eslint-disable no-nested-ternary */
import styled, { keyframes, css } from 'styled-components';
import start from 'images/start.jpg'
import image1 from 'images/level1.jpg'
import image2 from 'images/level2.jpg'
import image3 from 'images/level3.jpg'
import image4 from 'images/level4.jpg'
import image5 from 'images/level5.jpg'
import image6 from 'images/level6new.png'
import image7 from 'images/level7.jpg'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.coordinates === undefined || props.coordinates === '0,0' ? image1 : props.coordinates === '1,0' ? image2 : props.coordinates === '1,1' ? image3 : props.coordinates === '0,1' ? image4 : props.coordinates === '0,2' ? image5 : props.coordinates === '0,3' ? image6 : props.coordinates === '1,3' ? image7 : '')})
`

export const StartBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${start})
`
const FadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`
export const LevelCard = styled.div`
  padding: 0 20px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`
export const DescriptionCard = styled.div`
  position: absolute;
  right: ${(props) => (props.direction === 'East' && '20px')};
  top: ${(props) => (props.direction === 'North' && '20px')};
  bottom: ${(props) => (props.direction === 'South' && '20px')};
  left: ${(props) => (props.direction === 'West' && '20px')};
  display: flex;
  gap: 12px;
  animation: ${FadeIn} 2s ease-in forwards;
  flex-direction: ${(props) => (props.direction === 'North' ? 'column' : props.direction === 'South' ? 'column-reverse' : props.direction === 'East' ? 'row-reverse' : 'row')};
  
  @media(min-width: 1025px) {
    gap: 20px;
  }
  `

export const MainDescription = styled.p`
  font-family: 'Teko', sans-serif;
  color: #FFFAF0;
  font-weight: 800;
  font-size: 20px;
  line-height:  24px;
  letter-spacing: 1px;
  margin-top: 0;

  @media(min-width: 1025px) {
   font-size: 22px;
   line-height:  26px;
  }
`

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
  color: #FFFAF0;
  text-align: left;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 900;
  font-family: 'Bebas Neue', cursive;
  cursor: pointer;
  background: transparent;
  padding: 1px 5px;
  border-radius: 6px;
  }
`

export const MainDescriptionCard = styled.div`
  border-radius: 6px;
  padding: 15px;
  background: rgb(151 71 255 / 70%);
  max-width: 100%;
  animation: ${FadeIn} 2s ease-in forwards;
  margin-bottom: 277px;

  @media(min-width: 1025px) {
    max-width: 40%;
  }
`

export const Description = styled.p`
  font-family: 'Teko', sans-serif;
  padding: 15px;
  width: 80%;
  border-radius: 6px;
  color: #FFFAF0;
  background: rgb(151 71 255 / 70%);
  font-weight: 800;
  font-size: 16px;
  line-height:  24px;
  letter-spacing: 1px;
  max-width: 200px;
  margin: 0;

  @media(min-width: 1025px) {
   font-size: 22px;
   line-height:  26px;
  }
`

export const GreetingText = styled.h1`
  color: white;
  font-size: 60px;
  letter-spacing: 1px;
  padding: 0 20px;
`

export const Arrow = styled.img`
  width: 60px;
  padding: 0;
  transform: ${(props) => (props.direction === 'East' ? '' : props.direction === 'West' ? 'rotate(180deg)' : props.direction === 'North' ? 'rotate(-90deg)' : props.direction === 'South' ? 'rotate(90deg)' : '')}

`
export const SpaceButton = styled.button`
    background: none;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin-left: 10px;
    cursor: pointer;

    img{
      width: 90%;

      &:hover {
        width: 100%;
      }
    }
  `

export const StarterForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`

const flyAway = keyframes`
0% {
  transform: translate(-50%, -50%);
  opacity: 1;
}
10% {
  transform: translate(-50%, -50%) rotate(5deg);
}
15% {
  transform: translate(-50%, -48%) rotate(-8deg);
}
20% {
  transform: translate(-50%, -50%) rotate(8deg);
}
23% {
  transform: translate(-50%, -57%) rotate(-10deg);
}
28% {
  transform: translate(-50%, -53%) rotate(10deg);
}
35% {
  transform: translate(-50%, -50%) rotate(-12deg);
}
44% {
  transform: translate(-50%, -53%) rotate(12deg);
}
48% {
  transform: translate(-50%, -45%) rotate(-15deg) scale(1.3);
}

100% {
  transform: translate(-50%, -500%) rotate(-12deg) scale(1.2);
  opacity: 1;
}
`;

const FlySouth = keyframes`
0% {
  transform: translate(-50%, -50%);
  opacity: 1;
}

100% {
  transform: translate(-50%, 500%) rotate(-12deg) scale(1.2);
  opacity: 1;
}
`;

const FlyWest = keyframes`
0% {
  transform: translate(-50%, -50%);
  opacity: 1;
}
100% {
  transform: translate(-800%, -50%) rotate(-12deg) scale(1.2);
  opacity: 1;
}
`;

const FlyEast = keyframes`
0% {
  transform: translate(-50%, -50%);
  opacity: 1;
}
100% {
  transform: translate(500%, -50%) rotate(-12deg) scale(1.2);
  opacity: 1;
}
`;

export const PlayerWrapper = styled.div`
  position: relative;
  .player {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    animation: ${flyAway} 2s ease forwards;
  }
`;

export const PlayerLevelWrapper = styled.div`
  position: relative;
  .player {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    ${({ direction }) => direction === 'West' && css`
      animation: ${FlyWest} 4s ease forwards;
    `}

    ${({ direction }) => direction === 'East' && css`
      animation: ${FlyEast} 4s ease forwards;
    `}

      ${({ direction }) => direction === 'South' && css`
      animation: ${FlySouth} 4s ease forwards;
    `}

      ${({ direction }) => direction === 'North' && css`
      animation: ${flyAway} 4s ease forwards;
    `}
  }
`;

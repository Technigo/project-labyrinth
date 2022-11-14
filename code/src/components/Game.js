/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameSteps } from 'reducers/gamestate';
import { ClonedBackground } from 'styles/ProjectStyles';
import styled from 'styled-components/macro';
import compasspicture from '../images/compasspicture.png'

const Game = () => {
  const { description, actions } = useSelector((store) => store.gameState.stage)
  console.log('description', description)
  console.log('actions', actions)
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.gameState.showedUsername);

  const onNextAction = (type, direction) => {
    dispatch(fetchGameSteps(type, direction));
  }

  return (
    <ClonedBackground>
      <Wrapper>
        <h3>Here we go {userName}</h3>
        <div>{description}</div>
        {actions && actions.map((action) => {
          return (
            <div key={action.description}>
              <h3>{action.description}</h3>
              {action.direction === 'North' && <button type="button" onClick={() => onNextAction(action.type, action.direction)}><span>{action.direction}</span><span id="north">🢁</span></button>}
              {action.direction === 'West' && <button type="button" onClick={() => onNextAction(action.type, action.direction)}>{action.direction}<span className="west">🢀</span></button>}
              {action.direction === 'South' && <button type="button" onClick={() => onNextAction(action.type, action.direction)}>{action.direction}<span className="south">🢃</span></button>}
              {action.direction === 'East' && <button type="button" onClick={() => onNextAction(action.type, action.direction)}>{action.direction}<span className="east">🢂</span></button>}
            </div>
          )
        })}
      </Wrapper>
      <CompassStyled
        src={compasspicture}
        alt="compas" />
    </ClonedBackground>
  )
};

export default Game;

const Wrapper = styled.div`
padding: -2px 20px 237px 20px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
/* background-color: yellow; */
margin-bottom: 500px;

@media (min-width: 667px) and (max-width: 1024px) {
  margin-bottom: 400px;
  }


@media (min-width: 1024px) {
  margin-bottom: 200px;
}

div{
  margin-top: 2rem;
    background-color: rgba(216,191,151,.5411764705882353);
    border-radius: 25px;
    padding: 11px;
    width: 85%;
    color: #292b1d;
}
`
/* const East = styled.button`
all: unset;
cursor: pointer;
color: white;
height: auto;
width: 50px;
bottom: 16vh;
filter: drop-shadow(0 0 0.75rem crimson);
position: fixed;
`

const West = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  height: auto;
  width: 50px;
  position: fixed;
bottom: 16vh;
right: 18vw;
filter: drop-shadow(0 0 0.75rem crimson);

`

const North = styled.button`
#north {
  all: unset;
  cursor: pointer;
  color: white;
  height: auto;
  width: 50px;
  position: fixed;
bottom: 16vh;
right: 18vw;
filter: drop-shadow(0 0 0.75rem crimson);
}
`
const South = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  height: auto;
  width: 50px;
  position: fixed;
bottom: 16vh;
right: 18vw;
filter: drop-shadow(0 0 0.75rem crimson);
` */

const CompassStyled = styled.img`
position: absolute;
bottom: 4%;
width: 40%;
filter: drop-shadow(0 0 0.75rem crimson);


@media (min-width: 667px) and (max-width: 1024px) {
  width: 40%;
  }


@media (min-width: 1024px) {
  width: 15%;
}
`

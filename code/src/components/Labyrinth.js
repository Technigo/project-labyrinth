import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

// Thunk nextStep
import { nextStep } from '../reducers/game'

const Section = styled.section`
  border: 5px solid blue;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  word-break:break;
  
`;

const Header = styled.header`
  border: 2px solid red;
  width: 80%;
  /* margin:0 auto; */
`;

const HeadingOne = styled.h1`
  width: 200px;
  margin: 20px auto;
  color: blue;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 200px;
`;

const Label = styled.label`
  color: pink;
  margin-bottom: 5px;
`;
const Input = styled.input`
  height: 25px;
  margin-bottom: 5px;
`;
const Button = styled.button`
  margin-bottom: 20px;
`;

export const Labyrinth = () => {
  const { description, coordinates, actions } = useSelector(store => store.game.currentPosition)
  const dispatch = useDispatch()

  // example on how to deal with changing color depengding on coordinates
  const setBgColor = () => {
    let bg = 'pink'
    switch (coordinates) {
      case '0,0':
        bg = 'red'
        break
      case '1,0':
        bg = 'green'
        break
      case '1,1':
        bg = 'blue'
        break
      case '0,1':
        bg = 'yellow'
        break
      case '0,2':
        bg = 'orange'
        break
      case '0,3':
        bg = 'brown'
        break
      case '1,3':
        bg = 'purple'
        break
      default:
        bg = 'peachypuff'
    }
    return bg
  }

  //another way of doing it:
  const colorDictionary = {
    '0,0': 'red',
    '1,0': 'pink',
    '1,1': 'blue',
    '0,1': 'yellow',
    '0,2': 'purple',
    '0,3': 'green',
    '1,3': 'orange',
  }

  const handleButtonClick = (type, direction) => {
    // call the api, pass along type and direction to use as part of the body
    dispatch(nextStep(type, direction))
  }

  const ActionCard = ({ description, type, direction }) => (
    <div className='action-card'>
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type.toUpperCase()} {direction.toUpperCase()}
      </button>
    </div>
  )

  return (
    // Two ways of implementing the color change
    // <section className='labyrinth' style={{ background: setBgColor() }}>
    <Section style={{ background: colorDictionary[coordinates] }}>
      <div>
      <h1>{description}</h1>
      <p>{coordinates}</p>
      {actions.length === 0 && <h3>Yay you made it out!</h3>}
      {actions.length > 0 && actions.map(item => <ActionCard key={item.direction} {...item} />)}
      </div>
    </Section>
  )
}

import React from 'react'
import image from './assets/2792203.jpg'
import styled from 'styled-components/macro'

import { SelectionButton } from './components/SelectionButtons'
export const App = () => {
  return (
    <div className='container'>
      <img className='bodyImage' src={image} alt="pills"/>
      <div>
        <SelectionButton type='blue'>Click Me!</SelectionButton>
        <SelectionButton type='red'>Click Me!</SelectionButton>
      </div>

    </div>
  )
}

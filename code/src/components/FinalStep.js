import React from 'react'
import { useDispatch } from 'react-redux'
// import styled from 'styled-components/macro'
import Lottie from 'lottie-react'
// import { StartText } from './Start'
import Bottle from '../lotties/bottle.json'
import { Button } from './Buttons'
import { GrandFinal } from './GrandFinal'

export const FinalStep = () => {
  const dispatch = useDispatch()
  const handleBottleClick = () => {
    dispatch(GrandFinal())
  }

  return (
    <Button type="button" onClick={((event) => handleBottleClick(event.target.value))}>
      <Lottie style={{ width: '200px', margin: 'auto' }} animationData={Bottle} loop />
      Click bottle
    </Button>
  )
}

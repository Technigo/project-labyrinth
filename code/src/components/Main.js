import React from 'react'
import { useSelector } from 'react-redux'
import { Backgrounds } from 'components/Backgrounds'
import styled from 'styled-components'
import Location from './Location'
import { Start } from './Start'

const Main = () => {
  const username = useSelector((store) => store.maze.username)
  return (
    <MainSection>
      <Backgrounds />
      {username === '' ? <Start /> : <Location />}
    </MainSection>
  )
}

export default Main

const MainSection = styled.main`
display: flex;
justify-content: center;
border: pink solid 4px;
height: 100vh;

`
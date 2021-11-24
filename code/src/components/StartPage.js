import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGame, game } from '../reducers/game'
import styled from 'styled-components/macro'
import '../title.css'

const StyledStartPage = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  background-color: #111;
  background-image: radial-gradient(#333, #111);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
  color: #fff;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    border: 1px solid #ccc;
    font-family: Creepster;
  }
`

// const StartButton = styled.button``

const StartPage = () => {
  // const gameObject = useSelector((store) => store.game.gameObject)
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const onNameSubmit = (name) => {
    dispatch(game.actions.setUserName(name))
    setName('')
  }

  const onSetName = (event) => {
    setName(event.target.value)
  }

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      onNameSubmit(name)
      dispatch(fetchGame(name))
    }
  }

  return (
    <StyledStartPage>
      <div id='fly-in'>
        <div>
          <span>Do you</span>really dare
        </div>
        <div>
          <span>to enter</span> the maze?
        </div>
        <div>
          <span>Can you choose</span> the right <span>direction?</span>
        </div>
        <div>
          <span>Or will you</span> forever
        </div>
        <div>
          <span>be</span>Lost...
        </div>
      </div>

      <InputWrapper>
        <input
          type='text'
          value={name}
          placeholder='Your name, if you dare...'
          onChange={onSetName}
          onKeyDown={(event) => {
            onEnter(event)
          }}
        />

        <a href='#mainGame'>
          <button
            disabled={name.length === 0}
            className='button-49'
            onClick={() => {
              onNameSubmit(name)
              dispatch(fetchGame(name))
            }}
          >
            Start
            <img src='https://img.icons8.com/ios/50/000000/bat--v2.png' />
          </button>
        </a>
      </InputWrapper>
    </StyledStartPage>
  )
}

export default StartPage

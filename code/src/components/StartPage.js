/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { SubmitBtn } from '../lib/buttons'
import { labyrinth, generateLabyrinthData } from '../reducers/labyrinth'
// import { loading } from './reducers/loading'
import { CompassAnimation } from './LoadingStates/CompassAnimation'

const StartPage = () => {
  const [usernameSubmit, setUsernameSubmit] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  // const coordinates = useSelector((store) => store.labyrinth.coordinates)
  // const loadingState = useSelector((store) => store.loading.isLoading)

  const submitUsername = (event) => {
    event.preventDefault();
    setTimeout(() => { setLoading(true); }, 100);
    console.log('the user has now clicked the submit button')
    console.log('usernameSubmit:', usernameSubmit)
    // We send the usernameSubmit as payload to our slice labyrinth and the reducer setUsername
    // Thus updating our state to hold a new username
    dispatch(labyrinth.actions.setUsername(usernameSubmit));
    // We also send this username into our thunk, generateLabyrinthData.
    // The thunk allows us to POST or GET data to the API
    dispatch(generateLabyrinthData(usernameSubmit));
    setTimeout(() => { setLoading(false); }, 5000);
  }
  return (
    !loading ? (
      <div className="Start-container">
        <h1>THE MAZE</h1>
        <p>Enter the labyrinth on your own risk.</p>
        <p>Can you find a way out of the maze?</p>
        <form>
          <label htmlFor="usernameInput">
            <span>Enter your username:</span>
            <br />
            <input
              type="text"
              id="usernameInput"
              onChange={(event) => setUsernameSubmit(event.target.value)}
              value={usernameSubmit} />
          </label>
          <SubmitBtn type="submit" onClick={submitUsername}>Submit</SubmitBtn>
        </form>
      </div>
    ) : (
      <CompassAnimation />
    )
  );
}

export default StartPage;
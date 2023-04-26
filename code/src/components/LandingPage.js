import React from 'react';

const LandingPage = ({ onStartGame }) => {
  return (
    <div>
      <h1> Welcome to the Adventure! </h1>
      <p>
            Are you ready to begin your adventure?
      </p>
      <button type="button" onClick={onStartGame}>
       Start Game
      </button>
    </div>
  )
}
export default LandingPage;
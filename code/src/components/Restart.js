import React from 'react'
// import styled from 'styled-components';

const Restart = () => {
  const restart = () => {
    window.location.reload()
  }
  return (
    <div className="restartContainer">
      <button className="restartButton" onClick={restart}>Restart game</button>
    </div>
  )
}
export default Restart

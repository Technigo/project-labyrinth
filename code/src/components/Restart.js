import React from 'react'
import endPageImg from '../img/endpage.jpg'

const Restart = () => {
  const restart = () => {
    window.location.reload()
  }
  return (
    <div className="restartContainer">
      <img className="endpageImg" src={endPageImg} alt="Fireworks" />
      <button className="restartButton" onClick={restart}>Restart game</button>
    </div>
  )
}
export default Restart

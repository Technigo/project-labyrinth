import React from 'react'

export const Direction = ({ direction, setDirection }) => {

  

  return (
    <div>
    <button 
    onChange={e => setDirection(e.target.value)}
    
    >
 
      <p> {direction}</p> 
    </button>
  </div>
  )
}